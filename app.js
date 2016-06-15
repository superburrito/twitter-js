// Require modules
var express = require('express');
var app = new express();
var chalk = require('chalk');
var swig = require('swig');
var routes = require('./routes/index.js');

/*********************************/
// Sets the path to find view files
app.set('views',__dirname + '/views');
// Defines the type of file that we are looking for
app.set('view engine','html');
// Pass information from all html files to swig
app.engine('html', swig.renderFile);
// Switch off Swig's auto-caching
swig.setDefaults({ cache: false });
/*********************************/

// Logging Middleware Function, logs METHOD PATH
app.use(function(req,res,next){
  console.log(chalk.yellow(req.method) + ' ' + chalk.blue(req.path) + ' ');
  next();
});

// Encapsulates routes --> Why use '/', since it doesn't matter which url is being accessed?
app.use('/', routes);

// Listen on port 3000
app.listen(3000);
