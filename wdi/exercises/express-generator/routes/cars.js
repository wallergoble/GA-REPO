var express = require('express');
var _ = require('lodash');
var router = express.Router();

router.get('/', function(request, response) {
  response.send('Cars index');
});

// order matters here, we need new before show
router.get('/new', function(request, response) {
  response.send('Cars new');
});

router.get('/:id', function(request, response) {
  response.send('Cars show with id = ' + request.params.id);
});

router.post('/', function(request, response) {
  response.send('Cars create');
});

router.get('/:id/edit', function(request, response) {
  response.send('Cars edit with id = ' + request.params.id);
});

router.put('/:id', function(request, response) {
  response.send('Cars update with id = ' + request.params.id);
});

router.delete('/:id', function(request, response) {
  response.send('Cars delete with id = ' + request.params.id);
});

module.exports = router;
