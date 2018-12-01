//thực hiện tạo và sử dụng event đơn giản
EventEmitter = require("events").EventEmitter;
my_event = new EventEmitter();

my_event.on("lang_nghe", function () {
    console.log("sự kiện đã được gọi");
});

my_event.emit("lang_nghe");

