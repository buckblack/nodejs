// ví dụ event của server được tạo từ http
var http = require("http");

var server = http.createServer();
 
server.on("request", function (req, res) {
    res.end("this is the response");
});

server.listen(8080);

