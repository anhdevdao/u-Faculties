const express = require('express');
router = express.Router();
const ejs = require("ejs");
const fs = require("fs");
const connection = require("../config");

const authenticateController = require('../controllers/authenticate-controller'),
    registerController = require('../controllers/register-controller');


router.route('/controllers/authenticateController')
.post(authenticateController.authenticate);


router.route('/controllers/register-controller')
.post(registerController.register);

router.route('/signup')
.get((req, res) => res.render("signup"))

router.route('/')
.get((req, res) => res.render("login"))
.post((req, res) => res.render('login'))

router.route('/index')
.get((req, res) => res.render("index", {
  name: req.name
})) 

router.route('/field_research')
.get((req, res) => res.render("field_research"))

// Render with HTML
function renderHTML(path, res, data) {
    var htmlContent = fs.readFileSync(path, 'utf-8');
    data.filename = path;
  
    var htmlRenderized = ejs.render(htmlContent, data); 
    
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.end(htmlRenderized);
}

router.route('/unit')
.get(function(req, res) {
    connection.query('SELECT * FROM units', function (err, result, fields) {
      if (err) throw err;
      renderHTML('./views/unit.ejs', res, {units: result});
    });
})

router.route('/employee')
.get(function(req, res) {
    connection.query('SELECT * FROM employee', function (err, result, fields) {
      if (err) throw err;
      renderHTML('./views/employee.ejs', res, {employee: result});
    });
})
module.exports = router;