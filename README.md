# WebSocket Chat App
This is a simple chat application that uses WebSocket to enable real-time communication between multiple users.

Usage
To use this application, simply connect to the WebSocket server using the following code:

javascript
Copy code
`const socket = new WebSocket('ws://localhost:8080');

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
`
This code creates a new WebSocket instance and connects it to the server at ws://localhost:8080. Once connected, it sends a message to the server indicating that a new user has joined the chat. It also listens for incoming messages and updates the chat UI accordingly. When the WebSocket connection is closed, it updates the UI to indicate that the user has left the chat.

To send a message, the user types the message into the input field with the ID message-input and presses the Enter key. The message is then sent to the server using the socket.send() method.

License
This code is released under the MIT License. See LICENSE for more information.
