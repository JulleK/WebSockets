const socket = io("ws://localhost:8080");

const messageForm = document.querySelector(".message-form");
const messageInput = document.querySelector(".message-input");
const messageDisplay = document.querySelector("#messages");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userMessage = messageInput.value;
  ws.send(userMessage);
});

// websocket config
socket.on("message", (data) => {
  let message = data;
  messageDisplay.innerHTML += `<li class="message">${message}</li>`;
});

ws.addEventListener("close", () => {
  console.log("Connection closed");
});
