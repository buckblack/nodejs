var fs = require("fs");
var data = 'Đầu lòng hai ả tố nga,\nThúy Kiều là chị, em là Thúy Vân';

var writerStream = fs.createWriteStream('output.txt');

//ghi dữ liệu vào với mã hóa utf-8
writerStream.write(data,'UTF8');

//đánh dấu kết thúc tập tin
writerStream.end();

writerStream.on('finish', function() {
    console.log("Ket thuc hoat dong ghi.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Ket thuc chuong trinh");