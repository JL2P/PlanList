import React from "react";
import { Image, Container, Header, Icon, Segment } from "semantic-ui-react";

const MyCompletedEmptyView = ({ selectId }) => {
  return (
    <Container style={{ width: "900px", marginTop: "2em" }}>
      <Segment textAlign="center" style={{ height: "210px" }}>
        <Header icon style={{ marginTop: "30px" }}>
          <div>
            <Icon name="calendar times outline" />
            <br />
            {selectId} 님이 완료한 계획이 없습니다.
            <br />
            <div style={{ fontWeight: "lighter", fontSize: "13px" }}>
              등록한 계획들을 완료해 보세요.
            </div>
          </div>
        </Header>
      </Segment>
    </Container>
  );
};
// }

export default MyCompletedEmptyView;
