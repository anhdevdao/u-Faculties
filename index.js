var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var express = require("express");
var passport = require('passport');
var localStrategy = require('passport-local').Strategy
var session = require('express-session');
var bodyParser = require("body-parser");
var { parse } = require("querystring");

var connection = require("./config");
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));
//tạo authenticate cho 2 biến đăng ký và đăng nhập
var authenticateController = require("./controllers/authenticate-controller");
var registerController = require("./controllers/register-controller");
const mainRoute = require('./routes/router');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use(passport.initialize());
// Config session
app.use(session({
  secret: 'something',
  cookie: {
    maxAge: 60000
  }
}));
// app.use(passport.session());

// Config ejs engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routing
app.use('/', mainRoute);


// Render with mysql
function renderHTML(path, res, data) {
  var htmlContent = fs.readFileSync(path, 'utf-8');
  data.filename = path;

  var htmlRenderized = ejs.render(htmlContent, data); 
  
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.end(htmlRenderized);
}

app.get('/unit', function(req, res) {
  connection.query('SELECT * FROM units', function (err, result, fields) {
    if (err) throw err;
    renderHTML('./views/unit.ejs', res, {units: result});
  });
})

app.get('/employee', function(req, res) {
  connection.query('SELECT * FROM employee', function (err, result, fields) {
    if (err) throw err;
    renderHTML('./views/employee.ejs', res, {employee: result});
  });
})

// route to handle login and registration

console.log(authenticateController);


//listen port
app.listen(8012,()=>{
  console.log('Server running on port 8012');
});
