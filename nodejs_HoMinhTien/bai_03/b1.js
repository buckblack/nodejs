var thu_vien = require("./modules/thu_vien")
var http = require("http")
http.createServer((req, res) => {
    console.log(thu_vien.tong_hai_so(1, 5))
    console.log(thu_vien.loi_chao());
    //console.log(thu_vien.thuvien.loichao());

}).listen(3000)