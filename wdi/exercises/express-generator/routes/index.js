var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'the Thunder Dome'
   });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    name: 'Waller Goble',
    technologies: ['Express.js', 'HTML', 'swag-surfing']
  });
});
module.exports = router;
