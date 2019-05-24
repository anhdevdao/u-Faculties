const connection = require('../config/database');
const user = require('../models/user');

exports.createUnit = function(unitName, unitType, address, phone, website, check) {
    connection.query("INSERT INTO units (name, unit_type, address, phone, website) VALUES ('"+unitName+"', '"+unitType+"', '"+address+"', '"+phone+"', '"+website+"')", function(err, result) {
        if (err) {
            return check(err);
        }
        return check(null);
    })
}

exports.deleteUnit = function(id) {
    connection.query('SELECT * FROM units WHERE id = ?', id, function(err, rows) {
        if (err) return err;
        if (rows.length > 0) {
            connection.query("DELETE FROM units WHERE id = ?", id, function(err, result) {
                if (err) return err;
                console.log("Removed unit:" + id);
            })
        } else {
            console.log("Cannot find unit");
        }
    });
}

exports.getListUnit = function(cb) {
    connection.query('SELECT * FROM units', function(err, rows) {
        if (err) throw err;
        if (rows.length > 0) {
            cb(rows);
            return rows;
        } else {
            return null;
        }
    })
}

exports.createEmployee = function(employeeId, name, username, email, password, employeeType, degree, company, check) {
    connection.query("INSERT INTO employee (employeeId, name, username, email, employeeType, degree, company) VALUES ('"+employeeId+"', '"+name+"', '"+username+"', '"+email+"', '"+employeeType+"', '"+degree+"', '"+company+"')", function(err, result) {
        if (err) {
            return check(err);
        } else {
            user.createUser(username, password, (err) => {
                if (err) {
                    return check(err);
                }
                return check(null);
            })
        }
        //return check(null);
    })
}

exports.deleteEmployee = function(username) {
    connection.query("SELECT * FROM employee WHERE username = ?", username, function(err, rows) {
        if (err) return err;
        if (rows.length > 0) {
            connection.query("DELETE FROM employee WHERE username = ?", username, function(err, result) {
                if (err) return err;
                console.log("Removed user from employee: " + username)
            })
            connection.query("DELETE FROM account WHERE username = ?", username, function(err, result) {
                if (err) return err;
                console.log("Removed user from account: " + username)
            })
        } else {
            console.log("Cannot find user");
        }
    })
}