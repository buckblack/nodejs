var buffer1 = new Buffer('a');
var buffer2 = new Buffer('A');

var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" dung truoc " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" cung thu tu voi " + buffer2);
}else {
   console.log(buffer1 +" dung sau " + buffer2);
}



