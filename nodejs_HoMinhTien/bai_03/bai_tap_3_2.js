http = require("http");
ngay_thang = require("./modules/module_ngay_thang.js");
module_ngay_thang = new ngay_thang();

http.createServer(function(request, response) {
    response.end(module_ngay_thang.dinh_dang_ngay("en","day_du"));
}).listen(8080);
