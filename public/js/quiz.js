// build the quiz
var Q = new Quiz();

Q.getGrade(1)
    // sum
    .addRound(function (q) {
        var prompt = q.join(" ");
        var answer = 0;
        q.map(function (v) { answer += v;});
        return new Question(prompt,answer);
    })
        .addQuestion([9,6,9,6 ])
        .addQuestion([6,4,3,9 ])
        .addQuestion([7,8,4,6 ])
        .addQuestion([7,5,3,8 ])
        .addQuestion([4,3,8,3 ])
        .addQuestion([8,5,6,4 ])
        .addQuestion([7,8,9,4 ])
        .addQuestion([7,8,4,9 ])
        .addQuestion([7,8,4,5 ])
        .addQuestion([6,5,5,6 ])
        .addQuestion([5,5,4,7 ])
        .addQuestion([7,3,9,3 ])
        .addQuestion([4,7,6,8 ])
        .addQuestion([5,7,4,9 ])
        .addQuestion([5,6,4,8 ])
        .addQuestion([9,6,5,8 ])
        .addQuestion([4,3,8,9 ])
        .addQuestion([6,7,6,5 ])
        .addQuestion([8,4,4,5 ])
        .addQuestion([7,6,6,3 ])
        .addQuestion([6,5,4,7 ])
        .addQuestion([4,7,7,9 ])
        .addQuestion([5,9,3,4 ])
        .addQuestion([8,6,2,9 ]);

Q.getGrade(1)
    // pattern
    .addRound( function (q) {
       var prompt = q.join(", ");
       var answer = q[3]+(q[3]-q[2]);
       return new Question(prompt,answer);
    })
        .addQuestion([90,80,70,60])
        .addQuestion([80, 70, 60, 50])
        .addQuestion([95, 90, 85, 80]) 
        .addQuestion([60, 50, 40, 30]) 
        .addQuestion([3, 6, 9, 12])
        .addQuestion([5, 8, 11, 14]) 
        .addQuestion([12, 15, 18, 21]) 
        .addQuestion([2, 6, 10, 14])
        .addQuestion([6, 10, 14, 18]) 
        .addQuestion([7, 11, 15, 19]) 
        .addQuestion([28, 25, 22, 19]) 
        .addQuestion([31, 28, 25, 22]) 
        .addQuestion([23, 20, 17, 14]) 
        .addQuestion([21, 17, 13, 9])
        .addQuestion([26, 22, 18, 14]) 
        .addQuestion([31, 27, 23, 19]) 
        .addQuestion([99, 88, 77, 66])
        .addQuestion([77, 66, 55, 44]) 
        .addQuestion([88, 77, 66, 55]) 
        .addQuestion([7, 12, 17, 22]) 
        .addQuestion([6, 11, 16, 21]) 
        .addQuestion([9, 14, 19, 24]) 
        .addQuestion([34, 29, 24, 19]) 
        .addQuestion([51, 46, 41, 36])
        .addQuestion([29, 24, 19, 14]);


Q.getGrade(1)
    // money
    .addRound( function (q) {
        var prompt = q[0]+"d, "+q[1]+"n, "+q[2]+"p";
        
        var dimes = q[0];
        var nickels = q[1];
        var pennies = q[2];
        answer = dimes*10 + nickels*5 + pennies;
        
        return new Question(prompt,answer);
    })
        .addQuestion([4, 3, 2])
        .addQuestion([5, 1, 3])
        .addQuestion([4, 4, 4])
        .addQuestion([3, 3, 3])
        .addQuestion([5, 6, 2])
        .addQuestion([3, 5, 3])
        .addQuestion([5, 5, 3])
        .addQuestion([4, 5, 2])
        .addQuestion([4, 2, 7])
        .addQuestion([4, 3, 3])
        .addQuestion([2, 7, 4])
        .addQuestion([4, 3, 1])
        .addQuestion([3, 5, 3])
        .addQuestion([3, 2, 3])
        .addQuestion([4, 3, 1])
        .addQuestion([4, 4, 1])
        .addQuestion([4, 2, 2])
        .addQuestion([5, 3, 2])
        .addQuestion([7, 1, 3])
        .addQuestion([6, 3, 2])
        .addQuestion([6, 1, 2])
        .addQuestion([5, 4, 2])
        .addQuestion([3, 2, 4])
        .addQuestion([3, 1, 4]);
    
Q.getGrade(1)
    // solve
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([8,29])
        .addQuestion([-4,25])
        .addQuestion([6,19])
        .addQuestion([8,29])
        .addQuestion([-8,21])
        .addQuestion([5,26])
        .addQuestion([-4,25])
        .addQuestion([8,19])
        .addQuestion([-4,35])
        .addQuestion([6,19])
        .addQuestion([-7,28])
        .addQuestion([6,37])
        .addQuestion([-3,25])
        .addQuestion([6,29])
        .addQuestion([-7,12])
        .addQuestion([5,28])
        .addQuestion([-8,39])
        .addQuestion([8,30])
        .addQuestion([-3,16])
        .addQuestion([4,35])
        .addQuestion([-1,28])
        .addQuestion([8,29])
        .addQuestion([-5,16])
        .addQuestion([7,39])
        .addQuestion([-6,23])
        .addQuestion([8,19])
        .addQuestion([-4,35]);


var _ANSWER;
var _START;
var _ANSWERED = new Array();
var _TIME = new Array();

// Prototype definitions
function Quiz() {
    this.grades = [];
    
    this.curGrade = undefined;
    
    this.addGrade = function (grade_id, label) {
        var grade = new Grade(grade_id,label);
        this.grades.push(grade);
        
        return grade;
    };
    
    this.getGrade = function (grade_id) {
        for(var idx in this.grades) {
            if(grade_id == this.grades[idx].getId()) {
                return this.grades[idx];
            }
        } 
        
        // didn't find grade yet...add it
        var g = new Grade(grade_id, "Grade "+grade_id);
        this.grades.push(g);
        return g;
    };
    
    this.getCurrentGrade = function() {
            if(!this.curGrade) { 
                this.curGrade = this.grades[0];
            }
    };
    
    this.setCurrentGrade = function(grade_id) {
        this.curGrade = this.getGrade(grade_id);
        return this.curGrade;
    }
    
}

function Grade(id,label) {
    this.id = id;
    this.label = label;
    this.rounds = [];
    this.curRound = undefined;
    
    this.getId = function() {
        return this.id;
    };
    
    this.getLabel = function() {
        return this.label;
    };
    
    this.addRound = function(questionFactory) {
        var round = new Round(questionFactory);
        this.rounds.add(round);
        return round;
    };
    
    this.getRound = function(round_id) {
        return this.rounds[round_id-1];
    };
    
    this.getNumRounds = function() {
        return this.rounds.length;
    };
    
    this.getRounds = function() {
        return this.rounds;
    };
    
    this.getCurrentRound = function () {
        if(!this.curRound)
        {
            this.curRound = this.rounds[0];
        }
        return this.curRound;
    };   
    
    this.setCurrentRound = function (round_id) {
        this.curRound = this.getRound(round_id);   
        return this.curRound;
    };
}

function Round(id,questionFactory) {
    this.id = id;
    this.questionFactory = questionFactory;
    this.questions = [];
    this.start = 0;
    this.curQuestion;
    this.answered = 0;    
    this.time= 0;
    this.improving = false;
    
    this.getAvgTime = function() {
       	return  Math.floor(this.time/this.answered/1000);
    };
    
    this.isImproving = function() {
        return this.improving;
    };
    
    this.getId = function() {
        return this.id;
    };
    
    this.addQuestion = function(question) {
        var q = this.questionFactory(question);
        this.questions.push(q);
        return this;
    };
    
    this.nextQuestion = function() {
        this.start = new Date().getTime();
        this.curQuestion = this.questions[Math.floor(Math.random()*this.questions.length)];
        return this.curQuestion;
    };
    
    this.answerLongEnough= function(answer) {
        return answer.length == (this.curQuestion.getAnswer()+"").length;
    };
    this.answerMatches= function(answer) {
        if(answer.val() == question.getAnswer()) {
       	    var old_avg = this.getAvgTime();
       	    
   	        this.answered++;
   	        this.time  += (new Date().getTime() - this.start);
   	        
       	    var avg = this.getAvgTime();
       	    this.improving = (old_avg*1000 < avg); 
        }
    };
    
    
    
}

function Question(prompt,answer) {
    this.prompt = prompt;
    this.answer = answer;
    
    this.getPrompt = function() {
        return this.prompt;
    };
    this.getAnswer= function() {
        return this.answer;
    };
}


// UI events
function question() {
    //TODO: make this selection oncheck
    Q.getCurrentGrade().setCurrentRound( $("input[name=round]:checked").val() );
   
    var cur_question = Q.getCurrentGrade().getCurrentRound().nextQuestion();
   
   $( "#question" ).text(cur_question.getPrompt());
   speak(cur_question.getPrompt(), {pitch: 70, speed: 250});
   
   $( "#answer").val("");
   $( "#answer").focus();
}

function answer() {
	var answer = $("#answer");
    answer.val( answer.val().replace(/[^0-9\.]/g,'') );  
    
    var cur_round = Q.getCurrentGrade().getCurrentRound();
    if(cur_round.answerLongEnough(answer))  {                   
        if(cur_round.answerMatches(answer)) {
       	    $( "#time"+round ).text(cur_round.getAvgTime());
       	    
   	    	if(!cur_round.isImproving()) {
   	    		$( "#time"+round ).animate({backgroundColor: 'red'}, 1000);
   	    	} else {
   	    		$( "#time"+round ).animate({backgroundColor: 'green'}, 1000);
   	    	}
       	    
        	$( "#correct" ).show(1);
       	    $( "#correct" ).fadeOut(4000);
       	    $( "#wrong" ).hide();
    //   	    speak("You're smart");
        	question();
        } else {
       		$( "#answer").select();
        	$( "#wrong" ).show(1);
        	$( "#wrong" ).fadeOut(4000);
       	    $( "#correct" ).hide();
       	    
       	    speak("Oops");
    }
}

function initialize() {
   $( "#correct" ).hide();
   $( "#wrong" ).hide();
   $( "#roundChoice" ).buttonset();
   $( "#roundChoice input" ).click(question);
   
   $("#answer").keyup(answer);
   question();
   
   $( "#helpLink" ).click(function() { $("#help").dialog("open")});
   $( "#help" ).dialog({
  dialogClass: "no-close",
  autoOpen: false,
  buttons: [
    {
      text: "OK",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
});

}

$(window).load(initialize);
