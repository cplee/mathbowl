// build the quiz
var Q = new Quiz();

Q.getGrade(1)
    // pattern
    .addRound( function (q) {
       var prompt = q.join(", ");
       var answer = q[3]+(q[3]-q[2]);
       return new Question(prompt,answer);
    })

        .addQuestion([1,4,7,10])
        .addQuestion([3,8,13,18])
        .addQuestion([9,12,15,18])
        .addQuestion([55,50,45,40])
        .addQuestion([90,80,70,60])
        .addQuestion([13,16,19,22])
        .addQuestion([75,70,65,60])
        .addQuestion([1,11,21,31])
        .addQuestion([100,80,60,40])
        .addQuestion([77,66,55,44])
        .addQuestion([99,90,81,72])
        .addQuestion([2,3,5,8])
        .addQuestion([2,22,42,62])
        .addQuestion([98,94,90,86])
        .addQuestion([30,25,20,15])
        .addQuestion([10,30,50,70])
        .addQuestion([100,90,80,70])
        .addQuestion([22,19,16,13])
        .addQuestion([1,3,6,10])
        .addQuestion([88,77,66,55])
        .addQuestion([3,6,9,12])
        .addQuestion([35,30,26,23])
        .addQuestion([2,4,6,8])
        .addQuestion([8,11,14,17])
        .addQuestion([98,96,94,92])
        .addQuestion([4,6,10,16])
        .addQuestion([10,8,6,4])
        .addQuestion([0,3,6,9])
        .addQuestion([8,6,4,2])
        .addQuestion([98,87,76,65]);



Q.getGrade(1)
    // solve Plus
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([18,21])
        .addQuestion([22,30])
        .addQuestion([12,20])
        .addQuestion([13,21])
        .addQuestion([12,21])
        .addQuestion([15,24])
        .addQuestion([17,25])
        .addQuestion([19,27])
        .addQuestion([13,22])
        .addQuestion([11,20])
        .addQuestion([24,32])
        .addQuestion([9,16])
        .addQuestion([7,15])
        .addQuestion([8,14])
        .addQuestion([23,31])
        .addQuestion([5,14])
        .addQuestion([4,12])
        .addQuestion([21,30])
        .addQuestion([7,11])
        .addQuestion([29,34])
        .addQuestion([16,24])
        .addQuestion([19,25])
        .addQuestion([5,13])
        .addQuestion([17,23])
        .addQuestion([15,23])
        .addQuestion([17,26])
        .addQuestion([18,27])
        .addQuestion([22,31])
        .addQuestion([19,22])
        .addQuestion([24,33]);


Q.getGrade(1)
    // solve minus
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];  
        return new Question(prompt,answer);
    })
        .addQuestion([-9,13])
        .addQuestion([-7,16])
        .addQuestion([-15,17])
        .addQuestion([-4,19])
        .addQuestion([-15,18])
        .addQuestion([-7,23])
        .addQuestion([-8,19])
        .addQuestion([-15,19])
        .addQuestion([-19,13])
        .addQuestion([-14,18])
        .addQuestion([-12,19])
        .addQuestion([-8,17])
        .addQuestion([-9,16])
        .addQuestion([-11,19])
        .addQuestion([-17,18])
        .addQuestion([-18,14])
        .addQuestion([-19,14])
        .addQuestion([-16,15])
        .addQuestion([-18,13])
        .addQuestion([-6,19])
        .addQuestion([-14,17])
        .addQuestion([-13,18])
        .addQuestion([-3,18])
        .addQuestion([-12,18])
        .addQuestion([-16,14])
        .addQuestion([-14,18])
        .addQuestion([-17,14])
        .addQuestion([-12,19])
        .addQuestion([-17,23])
        .addQuestion([-22,8]);


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

        .addQuestion([7,4,3,8])
        .addQuestion([3,6,9,2])
        .addQuestion([9,9,3,2])
        .addQuestion([2,2,4,1])
        .addQuestion([6,8,8,2])
        .addQuestion([7,4,2,7])
        .addQuestion([6,6,5,5])
        .addQuestion([5,7,2,9])
        .addQuestion([9,7,8,3])
        .addQuestion([4,4,8,3])
        .addQuestion([6,3,9,4])
        .addQuestion([4,2,6,7])
        .addQuestion([5,4,3,2])
        .addQuestion([4,8,7,2])
        .addQuestion([3,4,3,8])
        .addQuestion([8,2,9,1])
        .addQuestion([4,2,7,3])
        .addQuestion([2,8,4,8])
        .addQuestion([8,3,4,4])
        .addQuestion([7,3,5,7])
        .addQuestion([3,5,8,8])
        .addQuestion([3,8,9,4])
        .addQuestion([9,7,5,3])
        .addQuestion([3,2,5,6])
        .addQuestion([2,8,4,2])
        .addQuestion([1,3,5,8])
        .addQuestion([4,2,7,8])
        .addQuestion([7,6,2,1])
        .addQuestion([4,3,9,9])
        .addQuestion([2,1,8,5]);

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
