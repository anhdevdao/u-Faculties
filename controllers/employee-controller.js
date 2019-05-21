const db = require('../models/db');
const xlsx = require('xlsx');

module.exports.addEmployee = function(req, res) {
    db.createEmployee(req.body.employeeId, req.body.name, req.body.username, req.body.email, req.body.password, req.body.employeeType, req.body.degree, req.body.company, (err) => {
        if (err) {
            res.json({
                status: false,
                message: 'Creating failed'
            })
        }
        return res.redirect('/employee');
    })
}

module.exports.addEmployeeByExcel = function(req, res) {
    var excel = xlsx.readFile(req.body.file)
    var ws = excel.Sheets;
    var data = xlsx.utils.sheet_to_json(ws)
    console.log(data);
}

module.exports.deleteEmployee = function(req, res) {
    console.log(req.body.username);
    console.log(req.body.type);
    if(req.body.type === 'delete') {
        db.deleteEmployee(req.body.username);
    }
}

module.exports.editEmployee = function(req, res) {
    // db.modifyEmployee(req.body.id, req.body.edit-name, req.body.edit-username, req.body.edit-email, req.body.edit-password, req.body.edit-employeeType, req.body.edit-degree, edit-company, (err) => {

    // })
}