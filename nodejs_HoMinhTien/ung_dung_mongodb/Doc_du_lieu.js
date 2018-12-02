var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var url = 'mongodb://localhost:27017/';
var url = `mongodb://tienhm:minhtien96@ds123434.mlab.com:23434/ban_dien_thoai_tien`
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log('Không kết nối với CSDL. Error:', err);
    } else {
        console.log('Kết nối thành công', url);
        //thao tác với csdl
        var csdl = "ban_dien_thoai_tien"
        var db = client.db(csdl)
        var bang_dien_thoai = db.collection("dien_thoai")
        var bang_cua_hang = db.collection("cua_hang")
        bang_dien_thoai.find({}).toArray((err, dsdienthoai) => {
            if (err) {
                console.log(err)
            } else {
                console.log(dsdienthoai)
            }
        })
    }
})