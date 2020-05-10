/* Chapter-2: Serve files using express */
const express = require('express');
const path = require('path');

// A top level function to provide express application
const app = express();

// This is the convention of using middleware and popular while using express
app.use('/public', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.listen(3000, () => {
  console.log('Node-Express server up and running at port 3000')
});