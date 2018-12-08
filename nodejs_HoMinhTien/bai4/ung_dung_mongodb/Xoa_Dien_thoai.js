var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
//var url = 'mongodb://localhost:27017/';
var url = `mongodb://tienhm:minhtien96@ds123434.mlab.com:23434/ban_dien_thoai_tien`
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log('Không kết nối với CSDL. Error:', err);
    } else {
        console.log('Kết nối thành công', url);
        var db = client.db("ban_dien_thoai_tien")
        var Bang_Dien_thoai = db.collection("dien_thoai");
        var Dieu_kien = {
            Ma_so: "IPHONE_18"
        }

        Bang_Dien_thoai.remove(Dieu_kien, function(Loi, Ket_qua) {
            if (Loi) {
                console.log(Loi)
            } else {
                console.log(Ket_qua)
            }
        })


    }
});