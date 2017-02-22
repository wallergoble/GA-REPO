var mongoose = require('mongoose');
var db = require('./db');

mongoose.connect('mongodb://localhost/movies-mongoose');

function quit() {
    mongoose.disconnect();
    console.log('All done');
}

