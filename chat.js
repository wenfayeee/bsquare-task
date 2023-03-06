const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  socket.send('New user joined the chat');
});

socket.addEventListener('message', (event) => {
  const message = event.data;
});

socket.addEventListener('close', () => {
  // update UI to indicate user has left the chat
});

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = '';
});
