const express = require('express');

const headerRoute = express.Router();

headerRoute.get('/', (req, res) => {
  console.log('You are at home');
  res.send('You are at home');
});

headerRoute.get('/about', (req, res) => {
  console.log('You are at about');
  res.send('You are at about');
});

module.exports = headerRoute;