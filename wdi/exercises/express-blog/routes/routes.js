let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {header: 'index, binch'})
});

router.get('/contact', function(req, res) {
  res.render('index', {header: 'contact, binch'})
});

router.get('/about', function(req, res) {
  res.render('index', {header: 'about, binch'})
});

module.exports = router;
