http = require("http");

EventEmitter = require("events").EventEmitter;
my_event = new EventEmitter();

my_event.on("lang_nghe", function () {
    console.log("sự kiện đã được gọi");
});

http.createServer(function(request, response) {
    my_event.emit("lang_nghe");
}).listen(8080);


