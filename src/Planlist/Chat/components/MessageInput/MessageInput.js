import React from "react";

import "./MessageInput.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <Input
      className="input2"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    ></Input>
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
