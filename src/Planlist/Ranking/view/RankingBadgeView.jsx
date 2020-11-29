import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";
import badge from "../badgeData";

const RankingBadgeView = ({ myLevel, loginId }) => {
  return (
    <Container style={{ width: "900px", marginTop: "3em" }}>
      <h2 style={{ textAlign: "center" }}>
        현재, {loginId} 님의 레벨은 "{badge[myLevel - 1].level}" 입니다.
      </h2>
      <h3 style={{ textAlign: "center" }}>
        계획들을 완료하여 레벨을 높여 보세요!
      </h3>
      <Segment color="yellow">
        <Grid>
          <Grid.Row>
            {badge.map((item, index) => (
              <div
                style={{
                  width: item.id === myLevel ? "90px" : "30px",
                  marginTop: item.id === myLevel ? "1px" : "30px",
                  marginLeft: "49px",
                }}
              >
                <Grid.Column>
                  <Image src={item.imgUrl} verticalAlign="middle" />
                </Grid.Column>
              </div>
            ))}
          </Grid.Row>
          <Grid.Row>
            {badge.map((item, index) => (
              <div
                style={{
                  width: item.id === myLevel ? "90px" : "30px",
                  marginLeft: "49px",
                }}
              >
                <Grid.Column>
                  <div style={{ fontSize: "1px", textAlign: "center" }}>
                    Lv.{item.id}
                  </div>
                  <div style={{ fontSize: "1px", textAlign: "center" }}>
                    {item.name}
                  </div>
                </Grid.Column>
              </div>
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default RankingBadgeView;
