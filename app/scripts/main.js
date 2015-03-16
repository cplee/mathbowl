// Prototype definitions
function Quiz() {
  this.grades = [];

  this.curGrade = undefined;

  this.addGrade = function (grade_id, label) {
    var grade = new Grade(grade_id, label);
    this.grades.push(grade);

    return grade;
  };

  this.getGrade = function (grade_id) {
    for (var idx in this.grades) {
      if (grade_id == this.grades[idx].getId()) {
        return this.grades[idx];
      }
    }

    // didn't find grade yet...add it
    var g = new Grade(grade_id, "Grade " + grade_id);
    this.grades.push(g);
    return g;
  };

  this.getCurrentGrade = function () {
    if (!this.curGrade) {
      this.curGrade = this.grades[0];
    }
    return this.curGrade;
  };

  this.setCurrentGrade = function (grade_id) {
    this.curGrade = this.getGrade(grade_id);
    return this.curGrade;
  }

}

function Grade(id, label) {
  this.id = id;
  this.label = label;
  this.rounds = [];
  this.curRound = undefined;

  this.getId = function () {
    return this.id;
  };

  this.getLabel = function () {
    return this.label;
  };

  this.addRound = function (questionFactory, title) {
    var round = new Round(this.rounds.length + 1, questionFactory, title);
    this.rounds.push(round);
    return round;
  };

  this.getRound = function (round_id) {
    return this.rounds[round_id - 1];
  };

  this.getNumRounds = function () {
    return this.rounds.length;
  };

  this.getRounds = function () {
    return this.rounds;
  };

  this.getCurrentRound = function () {
    if (!this.curRound) {
      this.curRound = this.rounds[0];
    }
    return this.curRound;
  };

  this.setCurrentRound = function (round_id) {
    this.curRound = this.getRound(round_id);
    update_rank();
    return this.curRound;
  };
}

function Round(id, questionFactory, title) {
  this.id = id;
  this.questionFactory = questionFactory;
  this.title = title;
  this.questions = [];
  this.start = 0;
  this.curQuestion;
  this.last10 = [];
  this.improving = false;
  this.records = [];

  this.getId = function () {
    return this.id;
  }

  this.addRecord = function (name,time) {
    this.records[name] = time;
  }

  this.getRanks = function() {
    var r = [];
    for(var key in this.records) {
      r.push({username:key,time:this.records[key]});
    }
    return r.sort(function(a,b){ return a.time-b.time});
  }

  this.getTitle = function () {
    if (!this.title)
      return "Answer";
    return this.title;
  };

  this.addQuestion = function (question) {
    var q = this.questionFactory(question);
    this.questions.push(q);
    return this;
  };

  this.nextQuestion = function () {
    this.start = new Date().getTime();
    this.curQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    return this.curQuestion;
  };
  this.currentQuestion = function () {
    return this.curQuestion;
  }

  this.answerLongEnough = function (answer) {
    return answer.length == (this.curQuestion.getAnswer() + "").length;
  };
  this.answerMatches = function (answer) {
    if (answer == this.curQuestion.getAnswer()) {
      var priorLast10 = this.getLast10();

      this.last10.unshift( new Date().getTime() - this.start );
      while(this.last10.length > 10) {
        this.last10.pop();
      }

      var last10 = this.getLast10();
      var bestLast10 = this.getBestLast10();
      if(last10 != undefined && (bestLast10 == undefined || last10 < bestLast10)) {
        save_record(last10);
      }

      this.improving = last10 < priorLast10;
      console.log("priorLast10: " +priorLast10+" last10:"+last10+" bestLast10:"+this.getBestLast10()+" improving:"+this.improving);

      return true;
    }
  };

  this.getAnswered = function() {
    return this.last10.length;
  }

  this.getLast10 = function() {
    if(this.last10.length < 10) {
      return undefined;
    }

    return this.last10.reduce(function(prev, curr) { return prev + curr; });
  };
  this.isImproving = function () {
    return this.improving;
  };
  this.getBestLast10 = function() {
    return this.records[get_username()];
  };


}

function Question(prompt, answer) {
  this.prompt = prompt;
  this.answer = answer;

  this.getPrompt = function () {
    return this.prompt;
  };
  this.getAnswer = function () {
    return this.answer;
  };
}


// UI events
function question_cb() {
  Q.setCurrentGrade($("input[name=grade]:checked").val())
    .setCurrentRound($("input[name=round]:checked").val());


  $("#answerLabel").html(Q.getCurrentGrade().getCurrentRound().getTitle() + "? ");

  update_score();

  say_question(Q.getCurrentGrade().getCurrentRound().nextQuestion());
}

function say_question(cur_question) {

  if ($("#showQuestion").hasClass('active')) {
    $("#question").text(cur_question.getPrompt());
  } else {
    $("#question").text(" ");
  }

  p = cur_question.getPrompt().replace(" - ", " mynis ");
  p = p.replace("q", "quarters");
  p = p.replace("n", "nickels");
  p = p.replace("d", "dimes");
  p = p.replace("p", "pennies");
  if (location.hash != '#mute') {
    speak(p, {pitch: 100, speed: 200, wordgap: 2});
  }

  $("#answer").val("");
  $("#answer").focus();

}

function update_score() {
  var cur_round = Q.getCurrentGrade().getCurrentRound();
  var best10 = cur_round.getBestLast10() / 1000;

  var answered = cur_round.getAnswered();
  $("#last10").text('');

  if(answered == 10) {
    var last10 = cur_round.getLast10() / 1000;
    $("#last10").text(last10);
  } else if(answered == 1) {
    message("Answer 9 more to achieve a time...");
  } else if(answered == 5) {
    message("Halfway there...keep it up!");
  } else {
  }


  if (!cur_round.isImproving()) {
    $("#last10").css('backgroundColor', 'red');
  } else {
    $("#last10").css('backgroundColor', 'green');
  }
}

function answer_cb() {
  var answer = $("#answer");
  answer.val(answer.val().replace(/[^0-9\.]/g, ''));

  var cur_round = Q.getCurrentGrade().getCurrentRound();
  if (cur_round.answerLongEnough(answer.val())) {
    if (cur_round.answerMatches(answer.val())) {

      $("#answerGroup").removeClass("has-error");
      $("#answerGroup").addClass("has-feedback");
      $("#wrong").hide();
      $("#correct").show(1);
      $("#correct").fadeOut(2000);
      question_cb();
    } else {
      $("#correct").hide();
      $("#answerGroup").addClass("has-error has-feedback");
      $("#answer").select();
      $("#wrong").show(1);

    }
  }
}

function message(txt) {
  $("#message").text(txt);
  $("#message").show(1);
  $("#message").fadeOut(4000);

}

function repeat_question() {
  say_question(Q.getCurrentGrade().getCurrentRound().currentQuestion());
}

function toggle_question() {
  var active = $("#showQuestion").hasClass('active');
  if (!active) {
    $("#question").text(Q.getCurrentGrade().getCurrentRound().currentQuestion().getPrompt());
    $("#showQuestion").text("Hide");
  } else {
    $("#question").text(" ");
    $("#showQuestion").text("Show");
  }
  $("#answer").focus();
}

function get_username() {
  return $("#username").val();
}

function save_username() {
  console.log("Username: "+get_username());
  if(typeof(Storage) !== "undefined") {
    localStorage.setItem('username',get_username());
  }
  question_cb();
}

function load_records(recordsData) {
  var records = recordsData.val();
  for(var key in records) {
    var val = records[key]
    Q.getGrade(val.grade).getRound(val.round).addRecord(val.username,val.time);
  }

  update_rank();
}
function update_rank() {
  $("#rankTable > tbody").empty();
  var i=1;
  var ranks = Q.getCurrentGrade().getCurrentRound().getRanks();
  for(var r in ranks) {
    var rank = ranks[r];
    $("#rankTable > tbody")
      .append($('<tr>').addClass(rank.username==get_username()?'success':'')
          .append($('<td>').text(i++))
          .append($('<td>').text(rank.username))
          .append($('<td>').text(rank.time/1000)));
    console.log(rank);
  }
}


function save_record(best10) {
  var username = get_username();
  var grade = Q.getCurrentGrade().getId();
  var round = Q.getCurrentGrade().getCurrentRound().getId();

  message("New record: "+(best10/1000)+"!");
  var key = grade+"_"+round+"_"+username;
  var val = {
    username: username,
    grade: grade,
    round: round,
    time: best10
  }
  var record = new Object();
  record[key] = val;
  firebaseRef.child('records').update(record);
}

var firebaseRef;
function initialize() {
  $("#correct").hide();
  $("#wrong").hide();
  $("#message").hide();

  // handle clicks on grade and round
  $(document).on('change', 'input:radio[id^="grade"]', question_cb);
  $(document).on('change', 'input:radio[id^="round"]', question_cb);

  // handle button clicks
  $("#showQuestion").click(toggle_question);
  $("#repeatQuestion").click(repeat_question);

  // handle enter key in answer field
  $("#answer").keyup(answer_cb);

  // handle form submit
  $('#usernameForm').on('submit', function() { $('#usernameModal').modal('hide'); return false; });

  // handle username save
  $('#usernameModal').on('hidden.bs.modal', save_username);
  $('#usernameModal').on('shown.bs.modal', function () { $('#username').focus(); })

  // get username
  if(typeof(Storage) !== "undefined") {
    $("#username").val(localStorage.getItem('username'));
  }
  $('#usernameModal').modal('show');


  firebaseRef = new Firebase("https://fiery-heat-6182.firebaseio.com/");
  firebaseRef.child('records').on("value",load_records);


}

$(window).load(initialize);
