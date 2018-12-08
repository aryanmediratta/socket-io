var express = require('express')
var app = express();

var http = require('http');
var server = http.createServer(app).listen(3000);

var io = require('socket.io')(server);
const path = require('path');

const PORT = process.env.PORT || 5000
const INDEX = path.join(__dirname, 'public', 'index.html');
console.log(INDEX);

const server = express()
	.use(express.static(path.join(__dirname, 'public')))
	.use((req,res) => res.sendFile(INDEX))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const io = socketIO(server);

io.on('connection', function(socket){
	console.log('New Connection!')

	socket.on('message',function(data){
		socket.broadcast.emit('message',data)
	})
socket.on('disconnect', () => console.log('Disconnected'));
}) //can use client instead of socket!

