const bcrypt = require('bcrypt');
const connection = require('../config');

module.exports.createUser = function(username, password, check) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            var users = {
                "username": username,
                "password": hash
            };
            // Check exist
            // var checkExist = 'SELECT * FROM account WHERE username = ?';
            // connection.query(checkExist, username, function(err, exist, next) {
            //     if(err) return check(err);
            //     if(exist) {
            //         return check(err);
            //     } else next;
            // })

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

module.exports.findUser = function(userId) {
    connection.query('SELECT username FROM account WHERE userId = ?', userId, function(err, results) {
        if (err) return err;
        if (results) {
            var name = results[0].username
            console.log(name)
            return name;
        }
    })
}


  
