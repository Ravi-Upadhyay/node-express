/* Chapter 6 - Working with Middleware */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Example-1: Middleware in action
app.use((req, res, next) => {
  console.log('inside middleware function: ');
  console.log(req.method);
  next();
});

// Example-2: Middleware only for particular route
// Example-3: Setting up data in the middleware
app.use('/area-51', (req, res, next) => {
  console.log('inside middleware function: ');
  console.log(req.method);
  req.access = false;
  next();
});

app.get('/', (req, res) => {
  res.send('Thank you for reaching us');
});

app.get('/area-51', (req, res) => {
  console.log(req.access);
  res.send('You do not have the access');
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});