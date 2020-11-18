import React from "react";
import { Input } from "semantic-ui-react";

import "./MessageInput.css";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className="form2">
    <Input
      className="input2"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      // onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      className="sendButton"
      onClick={(e) => {
        sendMessage(e);
      }}
    >
      Send
    </button>
  </form>
);

export default MessageInput;
