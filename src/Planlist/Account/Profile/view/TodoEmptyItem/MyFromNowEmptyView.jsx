import React from "react";
import { Image, Container, Header, Icon, Segment } from "semantic-ui-react";
import MainNoTodoContainer from "../../../../Main/Container/MainNoTodoContainer";

const MyFromNowEmptyView = ({ selectId, page }) => {
  return (
    <Container style={{ width: "900px", marginTop: "2em" }}>
      <Segment textAlign="center" style={{ height: "210px" }}>
        <Header icon style={{ marginTop: "30px" }}>
          <div style={{ marginTop: "-240px", fontSize: "5px" }}>
            <MainNoTodoContainer />
          </div>
        </Header>
      </Segment>
    </Container>
  );
};
// }

export default MyFromNowEmptyView;
