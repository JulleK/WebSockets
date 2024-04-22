import "./App.css";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <form action="" className="message-form">
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="message-input"
          />
          <input type="submit" value="Send message" />
        </form>
      </div>

      <ul id="messages"></ul>

      {/* <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script> */}
    </>
  );
}
