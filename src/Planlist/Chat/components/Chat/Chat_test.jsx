import * as React from "react";
import ChatView from "./ChatView";
import { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import MessageModel from "./MessageModel";

//소켓서버 연결
let sockJS = new SockJS("http://localhost:8000/api/chat");

let stompClient = Stomp.over(sockJS);
stompClient.debug = () => {};

const Chat_test = () => {
  const [contents, setContents] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/roomId", (data) => {
        const newMessage = new MessageModel(JSON.parse(data.body));

        addMessage(newMessage);
      });
    });
  }, [contents]);

  //엔터키 누르면 채팅서버로 보내지는 메세지
  const handleEnter = (username, e) => {
    if (e.key === "Enter") {
      const content = e.target.value;

      const newMessage = new MessageModel({ username, content });

      stompClient.send("/message", {}, JSON.stringify(newMessage));
      setMessage("");
    }
  };

  //채팅서버에서 받은 데이터를 프론트 state에 넣어주는 작업
  const addMessage = (message) => {
    setContents((prev) => [...prev, message]);
  };

  return (
    <div className={"container"}>
      <ChatView
        contents={contents}
        handleEnter={handleEnter}
        message={message}
        setMessage={setMessage}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};

export default Chat_test;
