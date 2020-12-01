import React from "react";
import { Container, Segment, Image } from "semantic-ui-react";

const ProfileNotFoundAccountView = ({ id }) => {
  return (
    <Container
      style={{
        width: "900px",
        marginTop: "5em",
      }}
    >
      <Segment vertical textAlign="center">
      <p style={{ fontWeight: "bold", fontSize: "30px" }}>

        '{id}' 회원님을 찾을 수 없습니다.</p>
        <p style={{ fontSize: "17px" }}>
        
          링크가 잘못되었거나 페이지가 삭제되었을 수 있습니다.
          <br />
          열려고 하는 링크가 올바른지 확인해보세요.
        </p>
        <Image
          href="/"
          src="/images/logo/logo2.png"
          size="tiny"
          verticalAlign="bottom"
        />
        &nbsp;
        <span style={{ fontWeight: "bold" }}>으로 돌아가기 !</span>
      </Segment>
    </Container>
  );
};

export default ProfileNotFoundAccountView;
