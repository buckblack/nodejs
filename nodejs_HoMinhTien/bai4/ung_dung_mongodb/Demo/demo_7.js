var buf1 = new Buffer('Hôm nay em đi học');

var buf2 = buf1.slice(0, 8);
var buf3 = buf1.slice(9);

console.log("Noi dung cua buf2 la: " + buf2.toString());
console.log("Noi dung cua buf3 la: " + buf3.toString());

