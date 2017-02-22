const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {header: 'index, binch'})
});

router.get('/', function(req, res) {
  res.render('index', {header: 'contact, binch'})
});

router.get('/', function(req, res) {
  res.render('index', {header: 'about, binch'})
});
