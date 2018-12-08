const buf = Buffer.alloc(26);
const buf2 = Buffer.alloc(26);
const buf3 = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  buf[i] = i + 97;
}

buf.copy(buf2, 8, 8, 10);
buf.copy(buf3, 0, 8, 10);

console.log(buf2.toString());
console.log(buf3.toString());

