import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinRoom.css";
import { Button, Input, Item } from "semantic-ui-react";

const JoinRoom = () => {
  const [name, setName] = useState("");
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
                Chat
              </Item>
            </div>
            <form className="joinForm" noValidate>
              <Input
                variant="outlined"
                margin="normal"
                required
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="room"
                label="room"
                type="room"
                // size="large"
                id="room"
                autoComplete="current-password"
                onChange={(e) => setRoom(e.target.value)}
              />
              <div className="buttonBox mt-10">
                <Link
                  className="joinButtonLink"
                  onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                  to={`/chat2/chat?name=${name}&room=${room}`}
                  // href={`/chat?name=${name}&room=${room}`}
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
