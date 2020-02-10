// Import stylesheets
import './style.css';
import $ from 'jquery';

// Initialise HTML
$('#app').html('<h1>Auth test</h1>');
$('#login').val('user1');
$('#pass').val('test');
$('#result').html('Pending...');

$('#send').on('click',function(){
  test();
});

//Create Database
var Datastore = require('nedb')
var db = new Datastore({ filename: './data.db', autoload: true });

var doc = {user:'user1', pass:'test'};

/*
db.insert(doc, function (err, newDoc) {
  console.log('insert complete ' + err);
});
*/

db.find({ pass: 'test' }, function (err, docs) {
  console.log(docs);
});

db.persistence.compactDatafile();


function test(){console.log('attempt');}