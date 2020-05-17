/* Chapter 5 - Dynamic Templating */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

// body-parser module is external package, not included into node js
app.use('/public', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// view engine must be set
app.set('view engine', 'ejs');

// Use render() method instead
app.get('/', (req, res) => {
  res.render('index', {data: {
    loggedIn: true,
    userName: 'R P Sharma',
    products: ['Personal Loan', 'Life Insurance', 'Vehicle Insurance'],
  }});
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});