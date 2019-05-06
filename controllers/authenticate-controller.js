const bcrypt = require('bcrypt');
const passport = require('passport');

const user = require('../models/user');

exports.userLogin = function(req, res) {  
  
  
  const username = req.body.username;
  const password = req.body.password;



  connection.query('SELECT * FROM account WHERE username =?',[username], function(error,results,fields) {
    if (error) {
      res.json({
        status: false,
        message:'There are some error with query'
      })
    } else {
      if(results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, check) {
          if (error) {
            res.json({
              status: false,
              message:'There are some error with password'
            })
          } else {
            if (check) {
              // res.render('index', {
              //   name: results[0].username
              // });
              res.redirect('/index');
            } else {
              res.json({
                status: false,
                message: "Username and password doesn't match"
              })
            }
          }    
        });
      } else {
        res.json({
          status:false,
          message:"User does not exits"
        })
      }
    }
  });
}
