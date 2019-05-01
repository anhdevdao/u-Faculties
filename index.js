var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var express = require("express");
var bodyParser = require("body-parser");
var { parse } = require("querystring");

var connection = require("./config");
var app = express();

app.use(express.static(__dirname + '/public'));
//tạo authenticate cho 2 biến đăng ký và đăng nhập
var authenticateController = require("./controllers/authenticate-controller");
var registerController = require("./controllers/register-controller");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Config session

// Config ejs engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/signup", function(req, res) {
  res.render("signup");
})

app.get("/", function(req, res) {
  res.render("login");
})

app.get('/index', function(req, res) {
  res.render("index");
})

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

app.get("/field_research", function(req, res) {
  res.render("field_research");
})

// var route = require('./routes/index');
// app.get('/unit', route.unitRender);

// route to handle login and registration

console.log(authenticateController);

app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticateController', authenticateController.authenticate);



//listen port
app.listen(8012,()=>{
  console.log('Server running on port 8012');
});
