/* Chapter 7 - Working with Router */
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const headerRoute = require('./routes/header');

app.use(bodyParser.json());
app.use('/', headerRoute);

app.use((req, res, next) => {
  console.log('inside middleware function: ');
  console.log(req.method);
  next();
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});