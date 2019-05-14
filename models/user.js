const bcrypt = require('bcrypt');
const connection = require('../config');

module.exports.createUser = function(username, password, check) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            var users = {
                "username": username,
                "password": hash
            };
            var insert = 'INSERT INTO account SET ?';
            connection.query(insert, users, function(err, result) {
                if (err) {
                    return check(err);
                }
                return check(null);
            }); 
        })
    })
}


  
