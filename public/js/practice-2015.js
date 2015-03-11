// build the quiz
var Q = new Quiz();

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

Q.getGrade(3)
    // perimeter
    .addRound( function (q) {
        var prompt = q[0] + " by " +q[1];
        var answer = (2*q[0]) + (2*q[1]);
        return new Question(prompt,answer);
    }, "Perimeter")
    .addQuestion([4,12])
    .addQuestion([3,14])
    .addQuestion([8,17])
    .addQuestion([2,11])
    .addQuestion([4,15])
    .addQuestion([9,18])
    .addQuestion([6,18])
    .addQuestion([3,17])
    .addQuestion([6,13])
    .addQuestion([4,19])
    .addQuestion([9,15])
    .addQuestion([7,14])
    .addQuestion([6,12])
    .addQuestion([9,13])
    .addQuestion([3,16])
    .addQuestion([8,11])
    .addQuestion([5,15])
    .addQuestion([2,19])
    .addQuestion([7,17])
    .addQuestion([4,16])
    .addQuestion([8,16])
    .addQuestion([7,11])
    .addQuestion([9,11])
    .addQuestion([8,14])
    .addQuestion([8,15])
    .addQuestion([7,13])
    .addQuestion([4,18])
    .addQuestion([5,12])
    .addQuestion([7,14])
    .addQuestion([8,15]);

Q.getGrade(3)
    // solve 
    .addRound( function (q) {
        var prompt = "N "+(q[0] < 0?"-":"+")+" "+Math.abs(q[0])+" = "+q[1];
        var answer = q[1] - q[0];
        return new Question(prompt,answer);
    })
    .addQuestion([18,44])
    .addQuestion([-27,38])
    .addQuestion([19,65])
    .addQuestion([-47,26])
    .addQuestion([17,53])
    .addQuestion([-25,59])
    .addQuestion([-33,49])
    .addQuestion([26,62])
    .addQuestion([-23,48])
    .addQuestion([26,71])
    .addQuestion([-35,48])
    .addQuestion([33,52])
    .addQuestion([-47,25])
    .addQuestion([48,74])
    .addQuestion([-24,49])
    .addQuestion([-27,45])
    .addQuestion([23,21])
    .addQuestion([-25,28])
    .addQuestion([29,54])
    .addQuestion([-24,59])
    .addQuestion([38,74])
    .addQuestion([-29,45])
    .addQuestion([18,43])
    .addQuestion([-43,29])
    .addQuestion([44,81])
    .addQuestion([43,91])
    .addQuestion([-39,44])
    .addQuestion([18,75])
    .addQuestion([-27,38])
    .addQuestion([45,91]);

Q.getGrade(3)
    // area
    .addRound( function (q) {
        var prompt = q[0] + " by " +q[1];
        var answer = q[0]* q[1];
        return new Question(prompt,answer);
    }, "Area")
    .addQuestion([7,12])
    .addQuestion([3,16])
    .addQuestion([6,18])
    .addQuestion([5,19])
    .addQuestion([8,14])
    .addQuestion([8,12])
    .addQuestion([5,18])
    .addQuestion([3,15])
    .addQuestion([6,14])
    .addQuestion([9,13])
    .addQuestion([8,13])
    .addQuestion([4,12])
    .addQuestion([3,13])
    .addQuestion([6,13])
    .addQuestion([9,16])
    .addQuestion([7,17])
    .addQuestion([4,13])
    .addQuestion([4,17])
    .addQuestion([7,18])
    .addQuestion([4,16])
    .addQuestion([9,12])
    .addQuestion([5,15])
    .addQuestion([4,18])
    .addQuestion([7,19])
    .addQuestion([9,15])
    .addQuestion([6,15])
    .addQuestion([3,18])
    .addQuestion([5,12])
    .addQuestion([8,19])
    .addQuestion([5,16]);

Q.getGrade(3)
    // division
    .addRound( function (q) {
        var prompt = q[0] + " ÷ " +q[1];
        var answer = q[0] / q[1];
        return new Question(prompt,answer);
    })
    .addQuestion([415,5])
    .addQuestion([396,6])
    .addQuestion([423,3])
    .addQuestion([828,9])
    .addQuestion([825,5])
    .addQuestion([285,5])
    .addQuestion([453,3])
    .addQuestion([552,4])
    .addQuestion([835,5])
    .addQuestion([801,9])
    .addQuestion([371,7])
    .addQuestion([156,4])
    .addQuestion([711,9])
    .addQuestion([161,7])
    .addQuestion([468,9])
    .addQuestion([738,9])
    .addQuestion([511,7])
    .addQuestion([424,8])
    .addQuestion([808,8])
    .addQuestion([224,7])
    .addQuestion([610,5])
    .addQuestion([672,3])
    .addQuestion([744,3])
    .addQuestion([856,8])
    .addQuestion([618,2])
    .addQuestion([120,6])
    .addQuestion([756,2])
    .addQuestion([231,3])
    .addQuestion([231,7]);

