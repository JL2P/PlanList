import React from "react";
import { Header, Icon } from "semantic-ui-react";

const MainNoTodoView = ({ onCreateTodoModal }) => {
  return (
    <div
      style={{
        minHeight: "600px",
        padding: "0em",
        marginTop: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header
        as="h1"
        icon
        onClick={() => {
          console.log("testse");
          onCreateTodoModal(true);
        }}
      >
        <Icon name="play" />
        <Header as="h1">계획 생성하기</Header>
        <Header.Subheader>
          현재 진행중인 계획이 존재하지 않습니다. 계획을 생성해보세요.
        </Header.Subheader>
      </Header>
    </div>
  );
};

export default MainNoTodoView;
