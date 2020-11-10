import React from "react";
import { Container, Segment } from "semantic-ui-react";

const ProfileNonMemberView = () => {
  return (
    <Container
      style={{
        width: "900px",
        marginTop: "2em",
      }}
    >
      <Segment vertical textAlign="center">
        <h1>회원가입 후 이용해 주시기 바랍니다.</h1>
      </Segment>
    </Container>
  );
};

export default ProfileNonMemberView;
