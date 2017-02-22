var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String} );

var kitty = new Cat ( { name: 'Zelda'} );

kitty.save( function (err) {
    if (err) {
        console.log('meow');
    }
    console.log('bark');
});

