http = require("http");
module_font = require("./modules/module_font.js");

http.createServer(function(request, response) {
    //response.end(module_font.camel_case("xin chao CAC Ban"));
    //response.end(module_font.underscore_case("xin chao CAC Ban"));
    //response.end(module_font.bo_dau_tieng_viet("Xin chào các & bạn"));
    response.end(module_font.friendly_url("Xin chào các & bạn"));
}).listen(8080);
