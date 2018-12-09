var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var thong_tin = {
        "tieu_de": "NodeJS",
        "dia_chi": "137E Nguyễn Chí Thanh",
        "san_pham": [{
                "ma_so": 1,
                "ten_sp": "A"
            },
            {
                "ma_so": 2,
                "ten_sp": "B"
            },
            {
                "ma_so": 3,
                "ten_sp": "C"
            },
            {
                "ma_so": 4,
                "ten_sp": "D"
            }
        ]
    }
    res.render('index', { thong_tin });
});

module.exports = router;