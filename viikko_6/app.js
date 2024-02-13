var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const router = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


app.get ('/esim',
function (request, response){
response.send ('esimerkki');
console.log ("esimerkki");
});


app.get ('/esim/:nimi',
function (request, response){
response.send ('nimi on ' + request.params.nimi);
console.log ("esimerkki");
});

app.get ('/esim/:nimi/:sukunimi',
function (request, response){
response.send ('nimi on ' + request.params.nimi + " " + request.params.sukunimi);
console.log ("esimerkki");
});

app.post ('/',
function(request,response){
response.send (request.body.nimi+ ' ' +request.body.sukunimi);
console.log (request.body.nimi+ ' ' +request.body.sukunimi);

});

