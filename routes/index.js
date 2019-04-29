var express = require('express')
var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var { parse } = require("querystring");
router = express.Router();

var connection = require("./config");

var app = express();

module.exports.unitRender = function(app) {
    function renderHTML(path, res, data) {
        var htmlContent = fs.readFileSync(path, 'utf-8');
        data.filename = path;
        
        var htmlRenderized = ejs.render(htmlContent, data); 
            
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.end(htmlRenderized);
    };
        
    app.get('/unit', function(req, res) {
        connection.query('SELECT * FROM units', function (err, result, fields) {
            if (err) throw err;
            renderHTML('./views/unit.ejs', res, {units: result});
        });
    });
}