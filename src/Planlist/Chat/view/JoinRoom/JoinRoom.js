import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinRoom.css";
import { Button, Input, Item } from "semantic-ui-react";

const JoinRoom = ({ account }) => {
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div
          className="joinFormContainer"
          // component={Paper}
        >
          <div className="joinFormBox">
            <div className="joinTitle">
              <Item component="h1" variant="h5">
                채팅방 이름 입력
              </Item>
            </div>
            <form className="joinForm" noValidate>
              <Input label="room" onChange={(e) => setRoom(e.target.value)} />
              <div className="buttonBox mt-10">
                <Link
                  className="joinButtonLink"
                  onClick={(e) => (!room ? e.preventDefault() : null)}
                  to={`/chat/chat?name=${account.accountId}&room=${room}`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{ background: "#FFB517" }}
                  >
                    Go!
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
