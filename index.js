const express = require('express');
const bodyParser = require('body-parser');


const ContactForm = require('./routes/contactForm');


const app = express();

//returns a function for app.use/ parses the request
app.use(bodyParser.json());
//could also be        var cb = bodyParser.json();
//                     app.use(cb);


//app.use will only match with request that start with api/v1/form/ sends request to contactform
app.use('/api/v1/form', ContactForm);


const PORT = process.env.PORT || 4020;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);