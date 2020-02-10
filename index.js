// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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
