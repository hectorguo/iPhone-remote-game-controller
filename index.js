var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });

// app.get('/mobile', function(req, res){
//   res.sendfile('mobile.html')
// });

// app.get('/game', function(req, res){
//   res.sendfile('snakyline.html')
// });

app.use(express.static(__dirname));

io.on('connection', function(socket){
  socket.on('direction', function(msg){
    io.emit('direction', msg);
    // console.log(msg);
  });
  socket.on('control', function(msg){
    io.emit('control', msg);
    // console.log(msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});