import React from "react";
import { Image, Container, Header, Icon, Segment } from "semantic-ui-react";

const MyIncompletedEmptyView = ({ selectId, page }) => {
  return (
    <Container style={{ width: "900px", marginTop: "2em" }}>
      <Segment textAlign="center" style={{ height: "210px" }}>
        <Header icon style={{ marginTop: "30px" }}>
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
        </Header>
      </Segment>
    </Container>
  );
};
// }

export default MyIncompletedEmptyView;
