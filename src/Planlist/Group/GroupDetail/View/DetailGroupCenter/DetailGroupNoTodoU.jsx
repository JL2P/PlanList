import React from "react";
import { Header, Icon } from "semantic-ui-react";

const DetailGroupNoTodoU = () => {
  return (
    <div
      style={{
        minWidth: "100%",
        minHeight: "400px",
        padding: "0em",
        marginTop: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header as="h1" icon onClick={() => {}}>
        <Icon name="play" />
        <Header>진행중인 계획이 없습니다.</Header>
        <Header.Subheader>그룹장이 계획을 준비중입니다.</Header.Subheader>
      </Header>
    </div>
  );
};

export default DetailGroupNoTodoU;
