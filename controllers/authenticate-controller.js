var bcrypt = require('bcrypt');

var connection = require('./../config');
module.exports.authenticate = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;



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
