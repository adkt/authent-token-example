// Import stylesheets
import './style.css';
import $ from 'jquery';


const fs = require('fs');
/*
fs.writeFile("test.data", "asdasdsadsadsa", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

var testdoc = fs.readFileSync('test.data','utf8');
console.log(testdoc);
*/

// Initialise HTML
$('#app').html('<h1>Auth test</h1>');
$('#login').val('user1');
$('#pass').val('test');
$('#result').html('Pending...');

$('#send').on('click',function(){
  login();
});

//Create Database
var Datastore = require('nedb')
var db = new Datastore({ filename: './data.db', autoload: true });

var databaseEntry = {user:'user2', pass:'test2'};

/*
db.insert(databaseEntry, function (err, newDoc) {
  console.log('insert complete ' + err);
});
*/

db.find({ pass: 'test' }, function (err, docs) {
  console.log(docs);
});

db.persistence.compactDatafile();

var currentUser = $('#login').val();

function login(){
  db.find({user:currentUser}, function (err, docs){
    if (docs[0].pass == $('#pass').val()){
      console.log('Pass is correct');
    } else {
      console.log('Pass is incorrect');
    }
  })
}