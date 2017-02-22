var express = require('express');
var router = express.Router();

    // hardcoded data
  const movies = [
      { title: 'movie1' },
      { title: 'movie2' },
      { title: 'movie3' },
      ]

// Movies Index
router.get('/', function(req, res, next) {

  res.json( { movies: movies } );
});

router.get('/:id', function (req, res, next) {
    const id = Number(req.params.id) ;
    // - 1 on id gets rid of 0 based index
    const movie = movies[id - 1];
    res.json( { movie : movie } );
});

module.exports = router;