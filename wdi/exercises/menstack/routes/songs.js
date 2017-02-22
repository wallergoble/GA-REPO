var express = require('express');
var router = express.Router();
var Song = require('../models/Song');
//INDEX
router.get('/', function(req, res, next){
  Song.find(function(err, songs){
    if(err) res.json({
      message: 'Could not find any songs'
    });
    res.render('layout', {songs: songs});    
  })
});
//NEW
router.get('/new', function(req, res, next){
  res.send('NEW');
});
//SHOW
router.get('/:id', function(req, res, next){
  Song.findById( { _id: req.params.id}, function(err, song){
    res.send(song);
  })
});
//EDIT
router.get('/:id/edit', function(req, res, next){
  Song.findById( { _id: req.params.id}, function(err, song){
    if(err) res.json({message: 'Could not find any songs'});
    res.render('layout', {song: song});    
  })
});
//POST
router.post('/', function(req, res, next){
  console.log(req.body);
  
  Song.create({
    artist: req.body.artist,
    title: req.body.title,
    genre: req.body.genre
  }, function (err, song) {
    if(err) {
      res.send("something wrong happened"+ err)
    } else {
      res.redirect('/songs');
    }
  });
});
//PUT
router.put('/:id', function(req, res, next){
  Song.findByIdAndUpdate(req.params.id, {
      artist: req.body.artist,
      title: req.body.title,
      genre: req.body.genre
    }, function(err, song){
      if (err) throw err;
      console.log(song);
    res.redirect('/');
  });
});
//DELETE
router.delete('/:id', function(req, res, next){
  Song.findByIdAndRemove(req.params.id, function(err, song){
    if (err) throw err;
    console.log('Song successfully deleted!');
    res.redirect('/songs');
  });
});
module.exports = router;