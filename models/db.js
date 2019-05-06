const connection = require('../config');

exports.createUnit = function(unitName, unitType, address, phone, website, check) {
    connection.query("INSERT INTO units (name, unit_type, address, phone, website) VALUES ('"+unitName+"', '"+unitType+"', '"+address+"', '"+phone+"', '"+website+"')", function(err, result) {
        if (err) {
            return check(err);
        }
        return check(null);
    })
}

exports.deleteUnit = function(unitName) {
    connection.query("DELETE FROM units WHERE name = ?", unitName, function(err, result) {
        if (err) {
            return check(err);
        }
        return check(null);
    })
}

exports.createEmployee = function(employeeId, name, username, email, employeeType, degree, company, check) {
    connection.query("INSERT INTO employee (employeeId, name, username, email, employeeType, degree, company) VALUES ('"+employeeId+"', '"+name+"', '"+username+"', '"+email+"', '"+employeeType+"', '"+degree+"', '"+company+"')", function(err, result) {
        if (err) {
            return check(err);
        }
        return check(null);
    })
}