import React from "react";
import { Button, Input } from "semantic-ui-react";

const ChatRoomView = ({ roomName, setRoomName, createRoom }) => {
  return (
    <div>
      <div>
        채팅방 이름 :{" "}
        <Input
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        ></Input>
        <Button onClick={(e) => createRoom(e)}>채팅방 생성</Button>
      </div>
    </div>
  );
};

export default ChatRoomView;
