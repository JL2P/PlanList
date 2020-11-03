import React, { Component } from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

class ProfilePrivateAccountTodoView extends Component {
  render() {
    const { accountId } = this.props;
    console.log("금나와라 뚝딱", accountId);
    return (
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Segment textAlign="center">
          <Header style={{ marginTop: "15px" }}>비공개 계정입니다</Header>
          {accountId}님의 계획을 보려면 팔로우 하세요
          <Segment.Inline style={{ marginTop: "15px" }}>
            <Button primary style={{ width: "200px", background: "#FFB517" }}>
              팔로우
            </Button>
          </Segment.Inline>
        </Segment>
      </Container>
    );
  }
}

export default ProfilePrivateAccountTodoView;
