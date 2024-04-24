import { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");
import MessagesList from "./MessagesList";

export default function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connection estabilished");
    });
    socket.on("message", (newMessage) => {
      updateMessages(newMessage);
    });
  }, []);

  const updateMessageInput = (event) => {
    setCurrentMessage(event.target.value);
  };
  const updateMessages = (newMessage) => {
    setMessages((oldMessages) => [...oldMessages, newMessage]);
    console.log(`received: ${newMessage}`);
    console.log(messages);
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
            onChange={updateMessageInput}
          />
          <button className="message-submit" onClick={sendMessage}>
            Send Message
          </button>
        </div>
      </div>

      <MessagesList messages={messages} />
    </>
  );
}
