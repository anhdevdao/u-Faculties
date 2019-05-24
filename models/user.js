const bcrypt = require('bcrypt');
const connection = require('../config/database');

module.exports.createUser = function(username, password, check) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            var users = {
                "username": username,
                "password": hash,
                "role": 'teacher',
            };
            // Check exist
            // if (user.findUser(username)) {
            //     return check(err);
            // }

            // Create User
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

module.exports.findUser = function(username) {
    connection.query('SELECT * FROM account WHERE username = ?', username, function(err, results) {
        if (err) return err;
        if (results.length > 0) {
            return true;
        }
    })
}


  
