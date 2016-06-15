var express = require('express');
// Creates a "routing system" modules. 
// Allows for modular definition of routes
var router = express.Router();
// could use one line instead: var router = require('express').Router();

// Use tweetBank as a module providing all the data
var tweetBank = require('../tweetBank');
var path = require('path');


/*** Body Parser to package reqs in JSON ***/
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({extended: false}));
// parse application/json
router.use(bodyParser.json());

// Route for tweet submissions
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  var pic = tweetBank.getPictureUrl();
  tweetBank.add(pic,name,text);
  res.redirect('/');
});


// We can use router.VERB with any VERB <-- Is it totally interchangeable with app.VERB?
router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render('index',{title: 'Twitter.js', tweets: tweets, showForm: true, value: 'Your Name'});
});

/*** BOTH METHODS WORK, BOTH TESTED ***/
// Rudimentary method: Write a specific handler for one <link> GET request
router.get('/stylesheets/style.css', function(req,res){
res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
});

// Abstract method, auto calls sendFile in response to GET or
// POST requests, matches these requests to files in 'public' dir
router.use(express.static('public'));


// Dynamic Routing - by user
router.get('/users/:name', function(req,res){
  var name = req.params.name;
  var tweets = tweetBank.find({ name: name});
  // Passes index.html to Express' view engine and uses the data object to populate
  // local variables in the template
  res.render('index',{title: 'Twitter.js - Posts by ' + name, tweets: tweets, showForm: true, value: name});
});

router.get('/tweets/:id', function(req,res){
  var id = parseInt(req.params.id);
  var tweets = tweetBank.find({ id: id});
  // Passes index.html to Express' view engine and uses the data object to populate
  // local variables in the template
  res.render('index',{title: 'Twitter.js - Post #Id:' + id, tweets: tweets});
});

module.exports = router;