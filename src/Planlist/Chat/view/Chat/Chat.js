// import React, { useEffect, useState } from "react";
// import queryString from "query-string";
// import io from "socket.io-client";
// // import { io } from "socket.io-client";
// import "./Chat.css";

// // 하위 컴포넌트
// import Messages from "../Messages/Messages";
// import RoomInfo from "../RoomInfo/RoomInfo";
// import Input from "../ChatInput/ChatInput";

// import { Button, Item } from "semantic-ui-react";

// let socket;

// const Chat = ({ location }) => {
//   const [name, setName] = useState("");
//   const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const [users, setUsers] = useState("");

//   // const io = require("socket.io-client");
//   // const ENDPOINT = "https://lamachat.herokuapp.com/";
//   const ENDPOINT = "http://localhost:";

//   useEffect(() => {
//     // query-string middleware의 사용
//     // const data = queryString.parse(location.search);
//     // console.log(location.search); // ?name=&room=
//     // console.log(data); // 객체 :
//     // 다시 정리
//     const { name, room } = queryString.parse(location.search);

//     // socket = io(ENDPOINT); // 소켓 연결
//     socket = io.connect(ENDPOINT); // 소켓 연결
//     console.log("소켓연결");
//     setName(name);
//     setRoom(room);

//     console.log("name, room", name, room);

//     // console.log(socket);
//     socket.emit("join", { name, room }, (error) => {
//       // console.log("error");
//       // 에러 처리
//       if (error) {
//         alert(error);
//       }
//     });

//     // return () => {
//     //   socket.emit("disconnect");

//     //   socket.off();
//     // };
//   }, [ENDPOINT, location.search]);
//   // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

//   useEffect(() => {
//     // 서버에서 message 이벤트가 올 경우에 대해서 `on`
//     socket.on("message", (message) => {
//       setMessages([...messages, message]);
//     });

//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, [messages]);

//   // 메세지 보내기 함수
//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (message) {
//       socket.emit("sendMessage", message, setMessage(""));
//     }
//   };

//   console.log(message, messages);
//   console.log(users, "users");

//   // return <h1>Chat</h1>;
//   // 1.roominfo
//   // 2.messages
//   // 3.input
//   return (
//     <div className="chatOuterContainer">
//       <div className="chatInnerContainer">
//         <div className="appbar">
//           <Item color="primary">
//             <Item className="toolBar">
//               <Button color="inherit" href="/chat">
//                 close
//               </Button>
//             </Item>
//           </Item>
//         </div>
//         <div className="chatScreen">
//           <Item elevation={5} className="chatScreenPaper">
//             <RoomInfo room={room} />
//             <Messages messages={messages} name={name} />
//             <Input
//               message={message}
//               setMessage={setMessage}
//               sendMessage={sendMessage}
//             />
//           </Item>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;


