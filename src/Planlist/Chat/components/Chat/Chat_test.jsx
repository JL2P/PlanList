import * as React from "react";
import ChatView from "./ChatView";
import { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import MessageModel from "./MessageModel";
import ChatRoomView from "./ChatRoomView";
import ChatRoomModel from "./ChatRoomModel";
import axios from "axios"

//소켓서버 연결
let sockJS = new SockJS("http://localhost:8000/api/chat");

let stompClient = Stomp.over(sockJS);
stompClient.debug = () => {};

const Chat_test = () => {
  const [contents, setContents] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [roomName, setRoomName] = React.useState("");
  const [rooms, setRooms] = React.useState("");

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/roomId", (data) => {
        const newMessage = new MessageModel(JSON.parse(data.body));

        addMessage(newMessage);
      });
    });
  }, [contents]);

  useEffect(()=>{})

  // 클릭하면 채팅방 생성
  const createRoom = (e) => {
    const roomName = e.target.value;
    const newRoom = new ChatRoomModel({ roomName });
    axios.post("/createroom",newRoom);
  };

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

  const addRoom = (room) => {
    setRooms((rooms) => [...rooms, room]);
  };

  return (
    <div className={"container"}>
      <ChatRoomView
        roomName={roomName}
        setRoomName={setRoomName}
        createRoom={createRoom}
      />
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
