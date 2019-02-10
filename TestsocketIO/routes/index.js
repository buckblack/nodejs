var express = require('express');
var router = express.Router();

//var app = require('express')();
//var http = require('http').Server(app);
//var io = require('socket.io')();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/socket', function(req, res, next) {
  res.render('socket');
});

/*io.on('connection', function(socket){
  alert('');
  console.log("Co nguoi ket noi " + socket.id);
  socket.on('user-send-message', function(data){
    io.sockets.emit('server-send-mesage', data);
  });
  
});*/

module.exports = router;
