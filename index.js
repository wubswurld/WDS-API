const express = require('express');
const bodyParser = require('body-parser');
const ContactForm = require('./routes/contactForm');

const app = express();
app.use(bodyParser.json());

//returns a function for app.use/ parses the request
//could also be        var cb = bodyParser.json();
//                     app.use(cb);

app.get('/', function (req, res) {
    res.send('Hello World!')
  })
//app.use will only match with request that start with api/v1/form/ sends request to contactform

app.use('/api/v1/form', ContactForm);

module.exports = app;
