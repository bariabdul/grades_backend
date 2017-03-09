var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var userdataRoutes = require('./routes/userdata');
var formRoutes = require('./routes/form');
var numRoutes = require('./routes/num');

var app = express();
//mongoose.connect('localhost:27017/restapi_test');
mongoose.connect('mongodb://root:toor@ds157819.mlab.com:57819/restapi_deployement');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', userRoutes);
app.use('/userdata', userdataRoutes);
app.use('/form', formRoutes);
app.use('/num', numRoutes);

module.exports = app;
