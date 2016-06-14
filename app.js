var express = require('express');
var app = new express();
var chalk = require('chalk');
var swig = require('swig');
var routes = require('./routes')
swig.setDefaults({ cache: false });

/***** Figure this out!! *********/
// Registers swig as the engine to process all html file
app.engine('html', swig.renderFile);
// Same as first?
app.set('view engine','html');
// Sets the path where we search for the first argument of res.render?
app.set('views',__dirname + '/views');
/*********************************/
//app.use(function(req,res,next){
//  res.render('index', whatever);
//  console.log(chalk.yellow(req.method) + ' ' + chalk.blue(req.path) + ' ');
//});

app.use('/', routes)

app.get('/stylesheets/style.css', function(req, res, next){
  res.sendFile('/public/stylesheets/style.css')
});

app.use(express.static('public'));

app.listen(3000);

app.use('/special/', function(req,res,next){
  res.send("You've reached the special area...");
  next(); 
});

app.get('/', function(req,res,next){
  res.send('Welcome!');
});

app.get('/news', function(req,res,next){
  res.send('This is the news section!');
});