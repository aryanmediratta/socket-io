var socket = io('http://localhost:3000');


function send(){
	inputBox = document.getElementById('message')
	socket.emit('chat', inputBox.value)
	inputBox.value = ''
}

socket.on('broadcast',function(data){
	console.log(data)
})


