// build the quiz
var Q = new Quiz();

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
    // solve Plus
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([8,29])
        .addQuestion([6,19])
        .addQuestion([8,29])
        .addQuestion([5,26])
        .addQuestion([8,19])
        .addQuestion([6,19])
        .addQuestion([6,37])
        .addQuestion([6,29])
        .addQuestion([5,28])
        .addQuestion([8,30])
        .addQuestion([4,35])
        .addQuestion([8,29])
        .addQuestion([7,39])
        .addQuestion([8,19])

Q.getGrade(1)
    // solve minus
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([-4,25])
        .addQuestion([-8,21])
        .addQuestion([-4,25])
        .addQuestion([-4,35])
        .addQuestion([-7,28])
        .addQuestion([-3,25])
        .addQuestion([-7,12])
        .addQuestion([-8,39])
        .addQuestion([-3,16])
        .addQuestion([-1,28])
        .addQuestion([-5,16])
        .addQuestion([-6,23])
        .addQuestion([-4,35]);

Q.getGrade(1)
    // sum + 10
    .addRound(function (q) {
        var prompt = q.join(" + ");
        var answer = 0;
        q.map(function (v) { answer += v;});
        prompt += " + 10";
        answer += 10;
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


// Second grade
Q.getGrade(2)
    // pattern
    .addRound( function (q) {
       var prompt = q.join(", ");
       var answer = q[3]+(q[3]-q[2])+((q[3]-q[2]) - (q[2]-q[1]));
       return new Question(prompt,answer);
    })
        .addQuestion([99,96,93,90])
        .addQuestion([3,6,10,15])
        .addQuestion([13,18,23,28])
        .addQuestion([12,15,19,24])
        .addQuestion([33,44,55,66])
        .addQuestion([22,25,29,34])
        .addQuestion([1,5,9,13])
        .addQuestion([100,92,85,79])
        .addQuestion([23,26,32,41])
        .addQuestion([2,20,38,56])
        .addQuestion([17,21,25,29])
        .addQuestion([99,77,55,33])
        .addQuestion([18,22,26,30])
        .addQuestion([12,22,32,42])
        .addQuestion([100,95,85,70])
        .addQuestion([99,88,77,66])
        .addQuestion([18,13,9,6])
        .addQuestion([11,33,55,77])
        .addQuestion([75,74,72,69])
        .addQuestion([80,79,76,71])
        .addQuestion([31,30,28,25])
        .addQuestion([11,12,14,17])
        .addQuestion([100,90,70,40])
        .addQuestion([1,3,6,10])
        .addQuestion([99,95,91,87])
        .addQuestion([100,91,82,73])
        .addQuestion([29,33,38,44])
        .addQuestion([90,80,71,63])
        .addQuestion([98,87,76,65])
        .addQuestion([58,56,52,46]);

Q.getGrade(2)
    // money
    .addRound( function (q) {
        var prompt = q[0]+"q, "+q[1]+"d, "+q[2]+"n, "+q[3]+"p";
        
        var quarters = q[0];
        var dimes = q[1];
        var nickels = q[2];
        var pennies = q[3];
        var answer = quarters*25 + dimes*10 + nickels*5 + pennies;
        
        return new Question(prompt,answer);
    })
        .addQuestion([1,2,2,2])
        .addQuestion([2,2,3,2])
        .addQuestion([3,1,1,3])
        .addQuestion([1,4,2,2])
        .addQuestion([1,1,1,1])
        .addQuestion([3,1,2,4])
        .addQuestion([2,2,2,2])
        .addQuestion([1,5,1,1])
        .addQuestion([2,3,3,3])
        .addQuestion([2,2,3,4])
        .addQuestion([2,3,3,4])
        .addQuestion([1,1,2,4])
        .addQuestion([3,1,1,2])
        .addQuestion([2,3,2,4])
        .addQuestion([2,3,1,4])
        .addQuestion([2,2,1,2])
        .addQuestion([3,1,1,5])
        .addQuestion([2,3,3,3])
        .addQuestion([1,4,1,1])
        .addQuestion([2,2,3,3])
        .addQuestion([1,1,1,3])
        .addQuestion([2,2,2,4])
        .addQuestion([2,4,1,1])
        .addQuestion([3,1,2,3])
        .addQuestion([1,1,2,5])
        .addQuestion([1,4,3,2])
        .addQuestion([2,2,3,1])
        .addQuestion([1,1,4,4])
        .addQuestion([1,5,1,2])
        .addQuestion([1,2,5,3]);

Q.getGrade(2)
    // sum + 10
    .addRound(function (q) {
        var answer = 0;
        q.map(function (v) { answer += v;});
        answer += 10;
        
        var is_subtract = q[1] < 0;
        if(is_subtract)
            q[1] *= -1;
        var prompt = is_subtract?q.join(" - "):q.join(" + ");
        prompt += " + 10";
        return new Question(prompt,answer);
    })
    .addQuestion([33,44])
    .addQuestion([77,-24])
    .addQuestion([36,23])
    .addQuestion([67,-34])
    .addQuestion([45,24])
    .addQuestion([99,-72])
    .addQuestion([45,23])
    .addQuestion([86,-34])
    .addQuestion([71,13])
    .addQuestion([86,-45])
    .addQuestion([77,-23])
    .addQuestion([24,34])
    .addQuestion([47,-22])
    .addQuestion([41,35])
    .addQuestion([68,-25])
    .addQuestion([17,22])
    .addQuestion([66,-22])
    .addQuestion([23,34])
    .addQuestion([45,-21])
    .addQuestion([26,22])
    .addQuestion([52,26])
    .addQuestion([51,-30])
    .addQuestion([53,24])
    .addQuestion([57,-31])
    .addQuestion([28,51])
    .addQuestion([45,-13])
    .addQuestion([48,11])
    .addQuestion([59,-25])
    .addQuestion([52,17])
    .addQuestion([36,-13]);



Q.getGrade(2)
    // solve 
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([24,67])
        .addQuestion([-16,42])
        .addQuestion([15,47])
        .addQuestion([-18,21])
        .addQuestion([15,57])
        .addQuestion([-12,56])
        .addQuestion([18,79])
        .addQuestion([-27,61])
        .addQuestion([32,64])
        .addQuestion([-13,56])
        .addQuestion([-33,41])
        .addQuestion([34,79])
        .addQuestion([-26,33])
        .addQuestion([65,89])
        .addQuestion([-25,42])
        .addQuestion([14,67])
        .addQuestion([-33,43])
        .addQuestion([14,76])
        .addQuestion([-23,26])
        .addQuestion([15,77])
        .addQuestion([56,78])
        .addQuestion([-22,77])
        .addQuestion([18,79])
        .addQuestion([-25,23])
        .addQuestion([18,59])
        .addQuestion([-35,34])
        .addQuestion([56,88])
        .addQuestion([-35,23])
        .addQuestion([31,54])
        .addQuestion([-14,52]);
