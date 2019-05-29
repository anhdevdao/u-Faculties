const xlsx = require('xlsx');

var excel = xlsx.readFile('ds_tai_khoan_canbo.xlsx')
var ws = excel.Sheets["Sheet1"];
var data = xlsx.utils.sheet_to_json(ws);

console.log(data);

