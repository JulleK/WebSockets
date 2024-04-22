const socket = io("ws://localhost:3000");

const messageForm = document.querySelector(".message-form");
const messageInput = document.querySelector(".message-input");
const messageDisplay = document.querySelector("#messages");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userMessage = messageInput.value;
  socket.emit("message", userMessage);
});

socket.on("message", (data) => {
  let message = data;
  messageDisplay.innerHTML += `<li class="message">${message}</li>`;
});
