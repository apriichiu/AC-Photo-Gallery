const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('We are on posts');
});

router.get('/gallery1', (req, res) => {
  res.send('We are on gallery1');
});

module.exports = router;
