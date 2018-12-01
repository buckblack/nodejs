http = require("http");
module_chao = require("./modules/module_chao");
xl=require("./modules/Xu_ly")

http.createServer(function(request, response) {
    var str=xl.Loi_chao("Thanh")
    response.end(str)
    
}).listen(3000);


