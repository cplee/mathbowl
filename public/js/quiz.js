var RD1_QUESTIONS = [
[9,6,9,6 ],
[6,4,3,9 ],
[7,8,4,6 ],
[7,5,3,8 ],
[4,3,8,3 ],
[8,5,6,4 ],
[7,8,9,4 ],
[7,8,4,9 ],
[7,8,4,5 ],
[6,5,5,6 ],
[5,5,4,7 ],
[7,3,9,3 ],
[4,7,6,8 ],
[5,7,4,9 ],
[5,6,4,8 ],
[9,6,5,8 ],
[4,3,8,9 ],
[6,7,6,5 ],
[8,4,4,5 ],
[7,6,6,3 ],
[6,5,4,7 ],
[4,7,7,9 ],
[5,9,3,4 ],
[8,6,2,9 ]
];

var RD2_QUESTIONS = [
[90,80,70,60],
[80, 70, 60, 50], 
[95, 90, 85, 80], 
[60, 50, 40, 30], 
[3, 6, 9, 12], 
[5, 8, 11, 14], 
[12, 15, 18, 21], 
[2, 6, 10, 14], 
[6, 10, 14, 18], 
[7, 11, 15, 19], 
[28, 25, 22, 19], 
[31, 28, 25, 22], 
[23, 20, 17, 14], 
[21, 17, 13, 9], 
[26, 22, 18, 14], 
[31, 27, 23, 19], 
[99, 88, 77, 66], 
[77, 66, 55, 44], 
[88, 77, 66, 55], 
[7, 12, 17, 22], 
[6, 11, 16, 21], 
[9, 14, 19, 24], 
[34, 29, 24, 19], 
[51, 46, 41, 36], 
[29, 24, 19, 14]
];

var RD3_QUESTIONS = [
[4, 3, 2],
[5, 1, 3],
[4, 4, 4],
[3, 3, 3],
[5, 6, 2],
[3, 5, 3],
[5, 5, 3],
[4, 5, 2],
[4, 2, 7],
[4, 3, 3],
[2, 7, 4],
[4, 3, 1],
[3, 5, 3],
[3, 2, 3],
[4, 3, 1],
[4, 4, 1],
[4, 2, 2],
[5, 3, 2],
[7, 1, 3],
[6, 3, 2],
[6, 1, 2],
[5, 4, 2],
[3, 2, 4],
[3, 1, 4]
];

var RD4_QUESTIONS = [
[8,29],
[-4,25],
[6,19],
[8,29],
[-8,21],
[5,26],
[-4,25],
[8,19],
[-4,35],
[6,19],
[-7,28],
[6,37],
[-3,25],
[6,29],
[-7,12],
[5,28],
[-8,39],
[8,30],
[-3,16],
[4,35],
[-1,28],
[8,29],
[-5,16],
[7,39],
[-6,23],
[8,19],
[-4,35]
];

var _ANSWER;
var _START;
var _ANSWERED = new Array();
var _TIME = new Array();

function question() {
   var round = $("input[name=round]:checked").val();
   
   var question;
   var answer;
   switch (round) {
   	case "1":
   	    var q = RD1_QUESTIONS[Math.floor(Math.random()*RD1_QUESTIONS.length)];
   	    question = q[0]+" + "+q[1]+" + "+q[2]+" + "+q[3];
   	    answer = q[0] + q[1] + q[2] + q[3];
	   	break;
   	case "2":
   	    var q = RD2_QUESTIONS[Math.floor(Math.random()*RD2_QUESTIONS.length)];
   	    question = q[0]+", "+q[1]+", "+q[2]+", "+q[3];
   	    answer =  q[3]+(q[3]-q[2]);
	   	break;
   	case "3":
   	    var q = RD3_QUESTIONS[Math.floor(Math.random()*RD3_QUESTIONS.length)];
   	    question = q[0]+"d, "+q[1]+"n, "+q[2]+"p";
   	    var dimes = q[0];
   	    var nickels = q[1];
   	    var pennies = q[2];
   	    answer = dimes*10 + nickels*5 + pennies;
	   	break;
   	case "4":
   	    var q = RD4_QUESTIONS[Math.floor(Math.random()*RD4_QUESTIONS.length)];
   	    question = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
   	    answer = q[1] - q[0];  
	   	break;
   }
   
   $( "#question" ).text(question);
   speak(question, {pitch: 70, speed: 250});
   
   $( "#answer").val("");
   $( "#answer").focus();
   
   
   _START = new Date().getTime();
   _ANSWER = answer;
}

function answer() {
	var answer = $("#answer");
    answer.val( answer.val().replace(/[^0-9\.]/g,'') );  
    
    if(answer.val() == _ANSWER) {
    	var t = new Date().getTime() - _START;
   	    var round = $("input[name=round]:checked").val();
   	    
   	    if (_ANSWERED[round] == undefined)
	   	    _ANSWERED[round]=1;
   	    else
	   	    _ANSWERED[round]++;
   	    if(_TIME[round] == undefined)
   	    	_TIME[round] = t;
   	    else
	   	    _TIME[round] += t;
   	    
   	    var avg = Math.floor((_TIME[round]/_ANSWERED[round])/1000);
   	    var oldavg = $( "#time"+round ).text();
   	    $( "#time"+round ).text(avg);
   	    
   	    if(oldavg != undefined) {
   	    	if(oldavg*1000 < t) {
   	    		$( "#time"+round ).animate({backgroundColor: 'red'}, 1000);
   	    	} else {
   	    		$( "#time"+round ).animate({backgroundColor: 'green'}, 1000);
   	    	}
   	    }
   	    
    	$( "#correct" ).show(1);
   	    $( "#correct" ).fadeOut(4000);
   	    $( "#wrong" ).hide();
//   	    speak("You're smart");
    	question();
    } else if(answer.val().length == (_ANSWER+"").length) {
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
