var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var thong_tin={
    "ten":"Cửa hàng Bán Điện thoại",
    "dia_chi":"137 Nguyễn Chí Thanh",
    "danh_sach":[
        {"Ma_so":1,"Ten":"A"},
        {"Ma_so":2,"Ten":"B"},
        {"Ma_so":3,"Ten":"C"}
    ]
  }
  res.render('index', {thong_tin} );
});

module.exports = router;
