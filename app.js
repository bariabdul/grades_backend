var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var insertRoutes = require('./routes/insert');

var app = express();
mongoose.connect('mongodb://root:toor@ds163701.mlab.com:63701/grades');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/insert', insertRoutes);

module.exports = app;
