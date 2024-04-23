import { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");

export default function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connection estabilished");
      socket.on("message", (newMessage) => {
        messages.push(newMessage);
        setMessages([...messages]);
        console.log(newMessage);
        console.log(messages);
        console.log("-------------------");
      });
    });
  }, [messages]);

  const updateMessage = (event) => {
    setCurrentMessage(event.target.value);
  };
  const sendMessage = () => {
    socket.emit("message", currentMessage);
    console.log("message sent successfully");
  };
  return (
    <>
      <div className="wrapper">
        <div className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="message-input"
            value={currentMessage}
            onChange={updateMessage}
          />
          <button className="message-submit" onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>

      <ul id="messages">
        {messages.map((message, idx) => {
          return (
            <li key={idx} className="message">
              {message}
            </li>
          );
        })}
      </ul>
    </>
  );
}
