/* Chapter 3 - Working with post requests */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// body-parser module is external package, not included into node js
app.use('/public', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('request-submited successfully');
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});