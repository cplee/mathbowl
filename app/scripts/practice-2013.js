// build the quiz
var Q = new Quiz();

Q.getGrade(1)
    // sum
    .addRound(function (q) {
        var prompt = q.join(" + ");
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

