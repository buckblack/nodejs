buf = new Buffer(256);
len = buf.write("NODEJS");

console.log(buf);
console.log("Tổng số byte đã ghi vào buffer : "+  len);




