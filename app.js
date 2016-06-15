// Require modules
var express = require('express');
var app = new express();
var chalk = require('chalk');
var swig = require('swig');
var routes = require('./routes/index.js');
// Switch off Swig's auto-caching
swig.setDefaults({ cache: false });


/*********************************/
// Configures swig to be the engine that processes all file with the 'html' extension
app.engine('html', swig.renderFile);
// What is this? Redundancy?
app.set('view engine','html');
// Sets the path where all rendering is done
app.set('views',__dirname + '/views');
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
