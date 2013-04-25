
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('views/quiz.html');
  //res.render('index', { title: 'Express' });
};