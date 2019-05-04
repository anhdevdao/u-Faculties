const bcrypt = require('bcrypt');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const connection = require('../config');
exports.authenticate = function(req, res, next) {

  // res.redirect('/users/' + req.body.username);
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.render('login', {
        message: info.message
      })
    }

    req.session.authenticateAt = null;
    req.session.save();

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/index');
    });
  })(req, res, next);

  passport.use('local', new localStrategy({
    username: req.body.username,
    password: req.body.password
  },
  connection.query('SELECT * FROM account WHERE username =?', username, function(err, results, fields) {
    if (err) {
      return done(err);
    } else {
      if(results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, check) {
          if (check) {
            return done(null, user);
          } else {
            res.json({
              status: false,
              message: "Username and password doesn't match"
            })
          }    
        })
      } else {
        return done(null, false, {message: 'Invalid account'});
      }
    }
  })
  ))

  passport.serializeUser(function (user, done) {
    done(null, false);
  })

  
  
  
  
  
  // const username = req.body.username;
  // const password = req.body.password;



  // connection.query('SELECT * FROM account WHERE username =?',[username], function(error,results,fields) {
  //   if (error) {
  //     res.json({
  //       status: false,
  //       message:'There are some error with query'
  //     })
  //   } else {
  //     if(results.length > 0) {
  //       bcrypt.compare(password, results[0].password, function(err, check) {
  //         if (error) {
  //           res.json({
  //             status: false,
  //             message:'There are some error with password'
  //           })
  //         } else {
  //           if (check) {
  //             // res.render('index', {
  //             //   name: results[0].username
  //             // });
  //             res.redirect('/index');
  //           } else {
  //             res.json({
  //               status: false,
  //               message: "Username and password doesn't match"
  //             })
  //           }
  //         }    
  //       });
  //     } else {
  //       res.json({
  //         status:false,
  //         message:"User does not exits"
  //       })
  //     }
  //   }
  // });
}
