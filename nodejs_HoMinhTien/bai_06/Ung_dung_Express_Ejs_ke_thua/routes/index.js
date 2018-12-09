var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/lien-he', function(req, res, next) {
  res.render('lien_he', { title: 'Express' });
});

module.exports = router;
