/* Chapter 4 - Validation of the data in the requests */
/* Chapter 4-A: Validation of Array and Objects */
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
 // Simulate the input received to reduce complexity
 const simulatedReq = {
   user : {
     name: 'R M Sharma',
     address: 'Somewhere in heaven',
     pincode: '1143ED'
   },
   products: ['PL', 'DKVL', 'HD']
 };

 const userSchema= Joi.object().keys({
  name: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  pincode: Joi.string().trim().length(6).required(),
 });

 const productsSchema = Joi.array().items(Joi.string());

 const requestSchema = Joi.object().keys({
  user: userSchema,
  products: productsSchema, 
});

 Joi.validate(simulatedReq, requestSchema, (err, result) => {
  if(err) console.log(err);
  else console.log(result);
 });
});

app.listen(3000, () => {
  console.log('Server up and running, Listening to port: 3000');
});