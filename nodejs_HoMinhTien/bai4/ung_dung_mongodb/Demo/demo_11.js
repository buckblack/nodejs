var fs = require("fs");
var zlib = require('zlib');

// chuyển dữ liệu từ file gioi_thieu.txt thành file nén file_nen.txt.zip
fs.createReadStream('gioi_thieu.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('file_nen.txt.zip'));
  
console.log("File duoc nen thanh cong.");


