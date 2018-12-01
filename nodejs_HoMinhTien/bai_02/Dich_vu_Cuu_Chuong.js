// POST
var http = require("http")
var port = 3000
var url = require("url")
var Xu_ly_tham_so = require("querystring")
var server = http.createServer((req, res) => {
    var Chuoi_nhan = ""
    req.on('data', (data) => {
            Chuoi_nhan += data
            console.log(Chuoi_nhan)
        })
        // Xử lý
    req.on('end', () => {
        /*
        // form 
        var so_cc = Xu_ly_tham_so.parse(Chuoi_nhan)
        */


        // Http
        var so_cc = JSON.parse(Chuoi_nhan)

        console.log(so_cc)
        res.end(Chuoi_nhan)

    })
})

server.listen(port,
    console.log(`Server run port: ${port}`)
)