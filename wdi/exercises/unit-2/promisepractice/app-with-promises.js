const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const db = require('./db');

const Car = require('./car');
// Connect to the dataase
mongoose.connect('mongodb://localhost/cars');

function quit() {
    mongoose.disconnect();
    console.log('I am so done with you rn');
}

// setTimeout(function () {
//     console.log('Bye Felicia');
//     quit();
// }, 5000);

// Simple error handler
function handleError(err) {
    console.log('Error: ', err);
    quit();
}

Car.remove({})
.then(function() {
    console.log('Cheffin up these cars, yo...');
        let theCars = [
        { make: 'Tesla', model: 'S', color: 'black', year: 2015 },
        { make: 'Toyota', model: 'Prius', color: 'Silver', year: 2010 },
        { make: 'Ford', model: 'Mustang', color: 'red', year: 1999 }
    ];
    return Car.create(theCars);
})
.then(function(savedCars) {
    console.log('Saved cars:', savedCars);
    return Car.findOne({ make: 'Tesla' });
})
.then(function(tesla) {
    tesla.color = 'red';
    return tesla.save();
})
.then(function(updatedTesla) {
    console.log('updatedTesla:', updatedTesla);
    quit();
})
.catch(function(err)
    return handleError(err)
});

console.log('Sup widdit');