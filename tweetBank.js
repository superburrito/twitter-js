var _ = require('lodash'); 

// Empty array to store tweets and their associated info
var data = []; 

var idCounter = 0;
function add (pictureUrl, name, text) {
  data.push({ pictureUrl: pictureUrl, name: name, text: text, id: idCounter++});
}


function list () {  
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getPictureUrl = function() {
  var profilePics = 
    ['http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg', 
  'http://i.telegraph.co.uk/multimedia/archive/03570/potd-grass_3570487k.jpg', 
  'http://i.telegraph.co.uk/multimedia/archive/03519/potd-squirrel_3519920k.jpg', 
  'http://i.dailymail.co.uk/i/pix/2015/09/28/08/2CD1E26200000578-0-image-a-312_1443424459664.jpg', 
  'https://pbs.twimg.com/media/CNTPIZ2WgAA0GYQ.jpg', 
  'http://science-all.com/images/animal/animal-06.jpg', 
  'http://www.wired.com/wp-content/uploads/2015/04/85120553.jpg', 
  'http://science-all.com/images/animals/animals-05.jpg', 
  'https://i.ytimg.com/vi/1LqyOX12_nQ/maxresdefault.jpg', 
  'http://static.boredpanda.com/blog/wp-content/uploads/2016/01/celebrity-look-alikes-animals-74__700.jpg']
  return randArrayEl(profilePics);
};


var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + 
         "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// Push chunks of random tweets onto data
for (var i = 0; i < 10; i++) {
 add( getPictureUrl(), getFakeName(), getFakeTweet() );
}

// Export functions to other files
module.exports = { add: add, list: list, find: find, getPictureUrl: getPictureUrl};


