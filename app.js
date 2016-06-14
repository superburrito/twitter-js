var express = require('express');
var app = new express();
var chalk = require('chalk');
var swig = require('swig');
swig.setDefaults({ cache: false });

var whatever = {
  bar: 'Title',
  foo: [
    { name: 'John'},
    { name: 'Yao'},
    { name: 'Reed'}
  ]
};


app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.use(function(req,res,next){
  res.render('somethingelse', whatever);
  console.log(chalk.yellow(req.method) + ' ' + chalk.blue(req.path) + ' ');
});


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


