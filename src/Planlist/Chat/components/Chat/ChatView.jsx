import * as React from "react";
import { Input } from "semantic-ui-react";

const ChatView = ({
  contents,
  message,
  username,
  setMessage,
  setUsername,
  handleEnter,
}) => {
  return (
    <div className={"chat-box"}>
      <div className="header">
        유저이름 :
        <Input
          style={{ flex: 1 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={"contents"}>
        {contents.map((message) => (
          <div key={message.messageId}>
            {" "}
            {message.messageId} : {message.username} : {message.content}{" "}
          </div>
        ))}
      </div>
      <div>
        <input
          placeholder="input your messages..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => handleEnter(username, e)}
        />
      </div>
    </div>
  );
};

export default ChatView;
