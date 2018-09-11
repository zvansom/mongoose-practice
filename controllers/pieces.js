// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  // Replace stub route with page that renders form for adding new piece
  db.Museum.find()
    .then(museums => museums.map(x => x.name))
    .then(museumNames =>   res.render('pieces/new', { museumNames }))
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;
