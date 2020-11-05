import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

@inject("Store")
@observer
class ProfileTodoEmptyView extends Component {
  render() {
    const { account } = this.props.Store;
    const selectId = account.getAccount.accountId;

    return (
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Segment textAlign="center" style={{ height: "160px" }}>
          <Header icon style={{ marginTop: "20px" }}>
            <Icon name="calendar times outline" />
            {selectId}님이 등록한 계획이 없습니다
          </Header>
        </Segment>
      </Container>
    );
  }
}

export default ProfileTodoEmptyView;
