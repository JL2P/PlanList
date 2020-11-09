import React from "react";
import "./ChatView.scss";
const ChatView = () => {
  return (
    <div>
      <div className="Chat__main">
        <div className="Chat__message"></div>
        <input type="text" placeholder="메세지를 입력하세요"></input>
        <button onClick="send()">전송</button>
      </div>
    </div>
  );
};

export default ChatView;
