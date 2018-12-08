buf1 = new Buffer("Xin chào các bạn\n");
buf2 = new Buffer("Đến với lập trình NodeJS");

buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString("utf-8"));