var fs = require("fs");

var data = '';

var readerStream = fs.createReadStream('gioi_thieu.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(du_lieu) {
   data += du_lieu;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Kết thúc chương trình");