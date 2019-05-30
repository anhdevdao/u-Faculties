const xlsx = require('xlsx');
const bcrypt = require('bcrypt');

var excel = xlsx.readFile('ds_tai_khoan_canbo.xlsx')
var ws = excel.Sheets["Sheet1"];
var data = xlsx.utils.sheet_to_json(ws);

for (var i = 0; i < data.length; i++) {
    console.log(data[i]["Mật khẩu"])
    var pass = data[i]["Mật khẩu"].toString();
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
            console.log(hash)
        })
    })
}

