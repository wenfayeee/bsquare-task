const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    socket.send('New user joined the chat');
  });
  
  socket.addEventListener('message', (event) => {
    const message = event.data;
    // update chat UI with new message
  });
  
  socket.addEventListener('close', () => {
    // update UI to indicate user has left the chat
  });
  
const messageInput = document.querySelector('#message-input');

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
  }
});