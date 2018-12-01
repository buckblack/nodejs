var http = require("http")
var port = 3000
    /*
    var server = http.createServer((req, res) => {
        //code
    })
    */

var server = http.createServer(function(req, res) {
    var method = req.method
    var url = req.url

    res.end(url)
        //console.log(req)
})

server.listen(
    port,
    console.log(`sever đã thực thi tại địa chỉ http://localhost:${port}`)
)