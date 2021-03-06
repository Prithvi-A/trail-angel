const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./config');
const model = require('./api/model/model.js');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//request handlers
require('./routes')(app);

app.listen(4000);

console.log('Listening on localhost:4000');

module.exports = app;