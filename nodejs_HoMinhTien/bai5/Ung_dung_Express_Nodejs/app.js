express = require('express')
http = require('http')
app = express()
port = 3000

/* route cơ bản */
app.get("/", function(req, res) {
    res.send("trang chủ");
});

app.get("/lien-he", function(req, res) {
    res.send("trang liên hệ");
});

app.post("/them-san-pham-moi", function(req, res) {
    res.send("vào trang thêm sản phẩm");
});

app.all("/ds-san-pham", function(req, res) {
    res.send("tất cả phương thức đều vào được");
});

app.get("/:id-:tenloai/:id-:tensp", function(req, res) {
    res.send(req.params);
});

/* END route cơ bản */

server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server running port: ${port}`)
})