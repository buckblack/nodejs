var http = require("http")
var port = 3000
var url = require("url")
var Xu_ly_tham_so = require("querystring")

var server = http.createServer((req, res) => {
    var tham_so = Xu_ly_tham_so.parse(req.url.replace("/", "").replace("?", ""))
    var a = Number(tham_so.so1)
    var b = Number(tham_so.so2)
    var tong = a + b
    res.end(`Tong hai so ${a} + ${b} = ${tong} `)
})

server.listen(port,
    console.log(`Server run port: ${port}`)
)