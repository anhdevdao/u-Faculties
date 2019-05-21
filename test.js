const xlsx = require('xlsx');

var excel = xlsx.readFile('ds_tai_khoan_canbo.xlsx')
var ws = excel.Sheets["Sheet1"];
var data = xlsx.utils.sheet_to_json(ws);


for (var i = 0; i < data.length; i++) {
    console.log(data[i]["Tên đăng nhập"]);
}   


// var newData = data.map(function (record) {
//     console.log(record.STT)
// })
