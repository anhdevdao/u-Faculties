const ejs = require("ejs");
const express = require("express");
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require("body-parser");
const { parse } = require("querystring");
const bcrypt = require('bcrypt');

const connection = require("./config");
const app = express();

app.use(express.static(__dirname + '/public'));

const mainRoute = require('./routes/router');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Config session
app.use(session({
  secret: 'something',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 5 
  }
}));

// Config passport
app.use(passport.initialize())
app.use(passport.session())

// app.use(passport.session());

// Config ejs engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routing
app.use('/', mainRoute);

// listen port
app.listen(8012,()=>{
  console.log('Server running on port 8012');
});
