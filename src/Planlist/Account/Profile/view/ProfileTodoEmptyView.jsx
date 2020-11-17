import React from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";

const ProfileTodoEmptyView = ({ selectId, page }) => {
  return (
    <Container style={{ width: "900px", marginTop: "2em" }}>
      <Segment textAlign="center" style={{ height: "190px" }}>
        <Header icon style={{ marginTop: "30px" }}>
          <div>
            <Icon name="calendar times outline" />
            <br />
            {page === "fromNow"
              ? selectId + " 님이 등록한 계획이 없습니다."
              : page === "completed"
              ? selectId + " 님이 완료한 계획이 없습니다."
              : selectId + " 님이 완료하지 못한 계획이 없습니다."}
          </div>
        </Header>
      </Segment>
    </Container>
  );
};
// }

export default ProfileTodoEmptyView;
