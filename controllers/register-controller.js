const express = require("express");
const bcrypt = require('bcrypt');
const connection = require('./../config');

//tạo module đăng ký với các parameters
module.exports.register = function(req, res) {
  var today = new Date();
  
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      var users = {
        "username": req.body.username,
        "password": hash
      }
      connection.query('INSERT INTO account SET ?', users, function(err,results,fields) {
        if (err) {
          res.next(err);
        }else {
          res.redirect('/')
        }
      });
    }); 
  });
  
}
