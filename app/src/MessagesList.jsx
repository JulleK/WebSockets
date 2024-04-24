import Message from "./message";

export default function MessagesList({ messages }) {
  return (
    <ul className="messages-list">
      {messages.map((message, idx) => {
        return <Message text={message} key={idx} />;
      })}
    </ul>
  );
}
