// set dependencies
let express = require('express');
let app = express();
let router = require('./config/routes.js');

// Set templates
app.set('views', './views');
app.set('view engine', 'ejs');

// Set middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

app.use('/', router);
let port = process.env.PORT || 3000;

app.listen(port);
console.log('Server started on ' + port);
