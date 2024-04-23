import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");

export default function App() {
  // useEffect(() => {}, []);
  return (
    <>
      <div className="wrapper">
        <div className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="message-input"
          />
          <button className="message-submit">Send Message</button>
        </div>
      </div>

      <ul id="messages"></ul>
    </>
  );
}
