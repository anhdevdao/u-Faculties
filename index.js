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
    maxAge: 1000 * 10 
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

app.get('/private', (req, res) => {
  if (req.isAuthenticated()) {
      res.send('Welcome')
  } else {
      res.send('Ban khong co quyen')
  }
})

// app.route('/signin')
// .post(passport.authenticate('local', {
//   successRedirect: '/index',
//   failureRedirect: '/'
// }))

// passport.use(new localStrategy(
//   (username, password, done) => {
//     connection.query('SELECT * FROM account WHERE username = ?', username, function(err, results) {
//       if (err) return err
//       if (results) {
//         bcrypt.compare(password, results[0].password, function(err, check) {
//           if (check) {
//             return done(null, results);
//           } else {
//             return done(null, false, {message: "Username and password doesn't match"});
//           }
//         })
//       } else {
//         console.log(results)
//         return done(null, false, {message: "User doesn't exist"});
//       }
//     })
//   }
// ))

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(id, done) {
//   connection.query('SELECT * FROM account WHERE userId = ?', id, function(err, results) {
//     done(err, results[0]);    
//   })
// });


// listen port
app.listen(8012,()=>{
  console.log('Server running on port 8012');
});
