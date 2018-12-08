var fs = require("fs");

var readerStream = fs.createReadStream('gioi_thieu.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log("Ket thuc chuong trinh");



