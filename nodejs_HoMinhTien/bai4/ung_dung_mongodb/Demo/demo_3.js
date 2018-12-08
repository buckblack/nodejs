buf = new Buffer(16);
for (var i = 0 ; i <= 15 ; i++) {
  buf[i] =  i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('utf-8'));
console.log(buf.toString('utf-8',0,5));



