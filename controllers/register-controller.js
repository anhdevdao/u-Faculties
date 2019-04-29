var Cryptr = require("cryptr");
var express = require("express");
var connection = require('./../config');

//tạo module đăng ký với các parameters
module.exports.register = function(req, res) {
  var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  var users = {
    "username": req.body.username,
    "password": encryptedString
  }
//query insert các parameters vào database
  connection.query('INSERT INTO account SET ?', users, function(error,results,fields) {
    if (error) {
      res.json({
        status:false,
        message:'there are some error with query'
      })
    }else {
      res.redirect('/')
    }
  });
}
