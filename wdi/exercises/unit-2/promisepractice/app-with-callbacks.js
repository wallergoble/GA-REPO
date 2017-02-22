const mongoose = require('mongoose');
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

Car.remove({}, function(err) {    
    console.log('Making some cars...');
    let theCars = [
        { make: 'Tesla', model: 'S', color: 'black', year: 2015 },
        { make: 'Toyota', model: 'Prius', color: 'Silver', year: 2010 },
        { make: 'Ford', model: 'Mustang', color: 'red', year: 1999 }
    ];


    Car.create(theCars, function(err, savedCars) {
        if (err) return handleError(err);
        console.log('Saved cars: ', savedCars);
        Car.findOne({ make: 'Tesla' }, function(err, tesla) {
            if (err) return handleError(err);
            tesla.color = 'blue';
            tesla.save(function(err, savedTesla) {
                console.log('savedTesla:', savedTesla)
                quit();
            });
        });
    });
});







console.log('Sup homie');
