import React, { useState } from "react";
import { Image, Container, Header, Icon, Segment } from "semantic-ui-react";
import MainNoTodoContainer from "../../../../Main/Container/MainNoTodoContainer";
import TodoCreateDesktopForm from "../../../../todo/view/TodoCreateDesktopForm";

const MyFromNowEmptyView = ({ selectId }) => {
  return (
    <div>
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Segment textAlign="center" style={{ height: "210px" }}>
          <Header icon style={{ marginTop: "30px" }}>
            {/* <div style={{ fontSize: "5px" }}>
              <MainNoTodoContainer />
            </div> */}
            <div>
              <Icon name="calendar times outline" />
              <br />
              {selectId} 님이 현재 진행중인 계획이 없습니다.
              <br />
              <div style={{ fontWeight: "lighter", fontSize: "13px" }}>
                계획들을 생성해 보세요.
              </div>
            </div>
          </Header>
        </Segment>
      </Container>
    </div>
  );
};

export default MyFromNowEmptyView;
