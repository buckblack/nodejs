http = require("http");

EventEmitter = require("events").EventEmitter;
my_event = new EventEmitter();

my_event.on("lang_nghe", function (response) {
    console.log("sự kiện đã được gọi");
    response.end("chạy lệnh trong sự kiện lắng nghe");
});

http.createServer(function(request, response) {
    gia_tri = my_event.emit("lang_nghe", response);
}).listen(8080);

