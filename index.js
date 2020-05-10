/* Chapter 1 - Starting with express */
const express = require('express');

const app = express();

/* 1.1. Based on route send user something */
app.get('/', (req, res) => {
  res.send('Voila! NodeJS and Express are up and running');
});

/* 1.2. Working with parameters */
app.get('/welcome/:name/:color', (req, res) => {
  console.log(req.params);
  res.send(`Welcome ${req.params.name}! We are glad to know that your favorite color is ${req.params.color}.`);
});

/* 1.3. Working with qurey Strings */
//  URL to  be called: http://localhost:8080/about?lang=en&contactMode=telephone
app.get('/about', (req, res) => {
  console.log(req.query);
  res.send(`Welcome! We have got your preference ${JSON.stringify(req.query)}.`);
});

app.listen(8080);