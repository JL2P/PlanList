import React from "react";
import GroupItemView from "./GroupItem/GroupItemView";
import { Container, Header, Menu } from "semantic-ui-react";

const MyGroupView = ({ sampleData }) => {
  const Groupitem = sampleData.map((item, index) => (
    <GroupItemView key={index} item={item} />
  ));

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#f2f2f2",
        padding: "80px 0",
      }}
    >
      <Container style={{ overflow: "hidden" }}>
        <b>내 그룹</b>
        <p>내가 가입한 그룹 목록입니다.</p>
        <Menu inverted secondary size="large">
          {Groupitem}
        </Menu>
      </Container>
    </div>
  );
};

export default MyGroupView;
