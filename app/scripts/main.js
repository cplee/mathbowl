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
  this.answered = 0;
  this.time = 0;
  this.improving = false;

  this.getId = function () {
    return this.id;
  }

  this.getAvgTime = function () {
    return Math.floor(this.time / this.answered / 1000);
  };

  this.isImproving = function () {
    return this.improving;
  };

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
      var old_avg = this.getAvgTime();

      this.answered++;
      this.time += (new Date().getTime() - this.start);

      var avg = this.getAvgTime();
      this.improving = (old_avg > avg);
      return true;
    }
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
  speak(p, {pitch: 100, speed: 200, wordgap: 2});

  $("#answer").val("");
  $("#answer").focus();

}

function answer_cb() {
  var answer = $("#answer");
  answer.val(answer.val().replace(/[^0-9\.]/g, ''));

  var cur_round = Q.getCurrentGrade().getCurrentRound();
  if (cur_round.answerLongEnough(answer.val())) {
    if (cur_round.answerMatches(answer.val())) {
      $("#time" + cur_round.getId()).text(cur_round.getAvgTime());

      if (!cur_round.isImproving()) {
        $("#time" + cur_round.getId()).css('backgroundColor', 'red');
      } else {
        $("#time" + cur_round.getId()).css('backgroundColor', 'green');
      }

      $("#answerGroup").removeClass("has-error");
      $("#answerGroup").addClass("has-feedback");
      $("#wrong").hide();
      $("#correct").show(1);
      $("#correct").fadeOut(4000);
      question_cb();
    } else {
      $("#correct").hide();
      $("#answerGroup").addClass("has-error has-feedback");
      $("#answer").select();
      $("#wrong").show(1);

      speak("Oops");
    }
  }
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

function initialize() {
  $("#correct").hide();
  $("#wrong").hide();


  $(document).on('change', 'input:radio[id^="grade"]', question_cb);
  $(document).on('change', 'input:radio[id^="round"]', question_cb);

  $("#showQuestion").click(toggle_question);

  $("#repeatQuestion").click(repeat_question);

  $("#answer").keyup(answer_cb);
  question_cb();

}

$(window).load(initialize);
