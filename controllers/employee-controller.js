const db = require('../models/db');

module.exports.addEmployee = function(req, res) {
    db.createEmployee(req.body.employeeId, req.body.name, req.body.username, req.body.email, req.body.employeeType, req.body.degree, req.body.company, (err) => {
        if (err) {
            res.json({
                status: false,
                message: 'Creating failed'
            })
        }
        return res.redirect('/employee');
    })
}