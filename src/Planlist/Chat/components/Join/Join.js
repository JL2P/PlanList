import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Item, Input } from "semantic-ui-react";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Form style={{ textAlign: "center", width: "500px" }}>
      <h1>Join</h1>
      <div>
        <Input
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="Room"
          onChange={(event) => setRoom(event.target.value)}
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat/chat?name=${name}&room=${room}`}
      >
        <Button type="submit">Go!</Button>
      </Link>
    </Form>
  );
}
