var express = require('express');
var app = new express();

app.listen(3000);

app.get('/', function(req,res,next){
  res.send('Welcome!');
});

