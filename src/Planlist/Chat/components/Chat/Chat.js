import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Button, Item, Input } from "semantic-ui-react";

// import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import MessageInput from "../MessageInput/MessageInput";

import "./Chat.css";

// const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
const ENDPOINT = "localhost:5000";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  //   const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log("아이디", socket.id); //45분

    socket.emit("join", { name, room }, ({ error }) => {
      // alert(error);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessages((messages) => [...messages, message]);
  //     //     });
  //     //     socket.on("roomData", ({ users }) => {
  //     //       setUsers(users);
  //   });
  // }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //   const sendMessage = (event) => {
  //     event.preventDefault();

  //     if(message) {
  //       socket.emit('sendMessage', message, () => setMessage(''));
  //     }
  //   }

  const sendMessage = (event) => {
    if (message) {
      event.preventDefault();

      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log("메세지", message, messages); // 1:15

  return (
    <div className="outerContainer">
      <div>Chat</div>
      <div className="container1">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onClick={(event) => (event.key === "Enter" ? sendMessage : null)}

          // message={message}
          // setMessage={setMessage}
          // sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
