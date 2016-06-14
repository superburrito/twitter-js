var express = require('express');
var app = new express();
var chalk = require('chalk');
app.listen(3000);


app.use(function(req,res,next){
  console.log(chalk.yellow(req.method) + ' ' + chalk.blue(req.path) + ' ');
  next(); 
});

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


