var mongoose = require('mongoose');
var db = require('./db');
var Car = require('./car');

// var tesla = new Car({ make: 'Tesla', model: 'S', color: 'black', year: 2014 });
// tesla.print();
// Connect to the database
// To connect use the following:
//   mongoose.connect('mongodb://username:password@localhost:27027/dbname');
// where the username, password, and port are all optional
mongoose.connect('mongodb://localhost/cars');

// a simple error handler
function handleError(err) {
  console.log('ERROR:', err);
  return err;
}

// // save the car to the DB
// tesla.save(function(err, saved) {
//   if (err) return handleError(err);
//   console.log('Car saved:', saved);
//   quit();
// });


// Find All
// Car.find({}, function(err, cars) {
//   if (err) return handleError(err);
//   cars.forEach(function(car) {
//     car.print();
//   });
//   quit();
// });

console.log('Updating the Tesla...');
var updates = { model: 'X', color: 'matte black'};
// var options = { new: true };
Car.findOneAndUpdate({ make: 'Tesla' }, updates,   function(err, updated) {
  if (err) return handleError(err);
  console.log('Updated!');
  // updated.print();
  quit();
});

// our app will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('All Done!');
}
