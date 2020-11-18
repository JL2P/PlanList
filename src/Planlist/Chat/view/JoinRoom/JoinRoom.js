import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Item } from "semantic-ui-react";

const JoinRoom = ({ account }) => {
  const [room, setRoom] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Form>
        <Input label="room" onChange={(e) => setRoom(e.target.value)} />
        <Link
          onClick={(e) => (!room ? e.preventDefault() : null)}
          to={`/chat/chat?name=${account.accountId}&room=${room}`}
        >
          <Button style={{ background: "#FFB517", marginLeft: "60px" }}>
            Go!
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default JoinRoom;
