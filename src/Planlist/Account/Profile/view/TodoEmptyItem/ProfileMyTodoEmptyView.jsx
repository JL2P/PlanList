import React from "react";
import { Image, Container, Header, Icon, Segment } from "semantic-ui-react";
import MainNoTodoContainer from "../../../../Main/Container/MainNoTodoContainer";

const ProfileMyTodoEmptyView = ({ selectId, page }) => {
  return (
    <Container style={{ width: "900px", marginTop: "2em" }}>
      <Segment textAlign="center" style={{ height: "210px" }}>
        <Header icon style={{ marginTop: "30px" }}>
          <div>
            {page === "fromNow" ? (
              <div style={{ marginTop: "-240px", fontSize: "5px" }}>
                <MainNoTodoContainer />
              </div>
            ) : //
            page === "completed" ? (
              <div>
                <Icon name="calendar times outline" />
                <br />
                {selectId} 님이 완료한 계획이 없습니다.
                <br />
                <div style={{ fontWeight: "lighter", fontSize: "13px" }}>
                  등록한 계획들을 완료해 보세요.
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: "40px", marginTop: "20px" }}>
                  <Image
                    href="/"
                    src="/images/button/smile.png"
                    size="mini"
                    verticalAlign="middle"
                  />
                  &nbsp; Good!
                </div>
                <div style={{ marginTop: "30px" }}>
                  {selectId} 님이 완료하지 못한 계획이 없습니다.
                </div>
              </div>
            )}
          </div>
        </Header>
      </Segment>
    </Container>
  );
};
// }

export default ProfileMyTodoEmptyView;
