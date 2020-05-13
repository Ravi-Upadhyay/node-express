/* Chapter 4 - Validation of the data in the requests */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

// body-parser module is external package, not included into node js
app.use('/public', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/', (req, res) => {
  // console.log(req.body);
  // res.json({ status: 200, statusText: 'submitted' });
  const schema = Joi.object().keys({
    exampleInputEmail1: Joi.string().trim().email().required(),
    exampleInputPassword1: Joi.string().min(5).max(10).required(),
  });
  Joi.validate(req.body, schema, (err, result) => {
    if(err) {
      console.log(err);
      res.json( {status: 400, statusText: 'invalid-data', debug: err} );
    } else {
      //do some DB work
      console.log('Joi result: ', result);
      res.json({ status: 200, statusText: 'submitted' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});