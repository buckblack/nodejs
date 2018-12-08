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

        //Lấy tất cả điện thoại
        /*bang_dien_thoai.find({}).toArray((err, dsdienthoai) => {
            if (err) {
                console.log(err)
            } else {
                console.log(dsdienthoai)
            }
        })*/

        //Lấy điện thoại theo điều kiện
        /*var dieu_kien = {
            "Nhom_Dien_thoai.Ma_so": "IPHONE"
        }
        bang_dien_thoai.find(dieu_kien).toArray((err, dsdienthoai) => {
            if (err) {
                console.log(err)
            } else {
                console.log(dsdienthoai)
            }
        })*/

        //lấy 1 điện thoại
        var dieu_kien = {
            "Ma_so": "IPHONE_18"
        }
        bang_dien_thoai.findOne(dieu_kien, (err, dienthoai) => {
            if (err) {
                console.log(err)
            } else {
                console.log(dienthoai)

            }
        })

        // Lấy theo Don_gia >15000000 thuộc nhóm Android
        /*var Dieu_kien = {
                $and: [
                    { "Don_gia_Ban": { $gt: 12000000 } },
                    { $or: [{ "Nhom_Dien_thoai.Ma_so": "ANDROID" }, { "Nhom_Dien_thoai.Ma_so": "IPHONE" }] }
                ]
            }*/
        /*var Dieu_kien = {
                "Don_gia_Ban": { $gt: 15000000 }
            }*/
        // Tìm gần đúng

        /*var Dieu_kien = {
            //"Ten":/P/  //like '%P%'
            //"Ten":/^P/ // like 'P%'
            //"Ten":/ 8GB$/  // like '%B'
        }*/

        /*bang_dien_thoai.find(Dieu_kien).toArray(function(err, Danh_sach_Dien_thoai) {

            if (err) {
                console.log(err)
            } else {
                console.log(Danh_sach_Dien_thoai)
            }
        })*/

        // Đọc Điện thoại có Đơn giá Bán lớn nhất chỉ lấy 5 dòng đầu thuộc Nhóm Android
        /*var Sap_xep = {
            "Don_gia_Ban": -1
        }
        var Dieu_kien = {
            "Nhom_Dien_thoai.Ma_so": "ANDROID"
        }

        bang_dien_thoai.find(Dieu_kien).sort(Sap_xep).skip(0).limit(5).toArray(function(err, Danh_sach_Dien_thoai) {
            if (err) {
                console.log(err)
            } else {
                console.log(Danh_sach_Dien_thoai)
            }
        })*/
    }
})