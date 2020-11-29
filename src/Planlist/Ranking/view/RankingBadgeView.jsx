import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";
import badge from "../badgeData";

const RankingBadgeView = ({ myLevel, loginId }) => {
  console.log("레벨", badge[0].id === myLevel);
  return (
    <Container style={{ width: "900px", marginTop: "3em" }}>
      <h3 style={{ textAlign: "center" }}>
        현재, {loginId} 회원님의 레벨은 "{badge[myLevel - 1].level}" 입니다.
      </h3>
      <Segment color="yellow">
        <Grid stackable>
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
                  // marginTop: item.id === myLevel ? "1px" : "20px",
                  marginLeft: "40px",
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
