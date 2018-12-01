var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    var url_parse = url.parse(req.url, true)
    var so1 = url_parse.query.so1
    var so2 = url_parse.query.so2

    res.end(`Tổng 2 số là: ${so1*1+so2*1}`, 'utf8')
}).listen(3000)