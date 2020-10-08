import React, { Component } from "react";
import {
  Container,
  Header,
  Image,
  Grid,
  Item,
  Button,
  Icon,
} from "semantic-ui-react";

const ProfileManageView = () => {
  let pHeight = "25px"; // Row 간격
  let pText1 = "30px"; // 첫 번째 Row fontSize
  let pText2 = "20px"; // 두 번째 Row fontSize

  return (
    <Container text style={{ marginTop: "3em" }}>
      <Grid stackable>
        <Grid.Row>
          {/* 프로필 이미지 */}
          <Grid.Column width={4}>
            <Image src="/profiles/hungry.png" size="small" bordered circular />
          </Grid.Column>
          {/* 아이디, 오늘 할 일 */}
          <Grid.Column width={4} style={{ paddingTop: pHeight }}>
            <Grid.Row style={{ fontSize: pText1 }}>chulchul_2</Grid.Row>
            <div style={{ fontSize: pText2 }}>
              <Grid.Row style={{ paddingTop: pHeight }}>
                오늘 할 일 &nbsp; 2
              </Grid.Row>
            </div>
          </Grid.Column>
          {/* 팔로워 */}
          <Grid.Column width={4} style={{ paddingTop: pHeight }}>
            <Grid.Row style={{ fontSize: pText1 }}>&nbsp;</Grid.Row>
            <Grid.Row style={{ paddingTop: pHeight, fontSize: pText2 }}>
              팔로워 &nbsp; 10
            </Grid.Row>
          </Grid.Column>
          {/* 셋팅, 팔로우 */}
          <Grid.Column width={4} style={{ paddingTop: pHeight }}>
            <Grid.Row style={{ fontSize: pText1 }}>
              <Icon name="setting" onClick />
            </Grid.Row>
            <Grid.Row style={{ paddingTop: pHeight, fontSize: pText2 }}>
              팔로우 &nbsp; 12
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p style={{ paddingTop: "1em" }}>
        소개글 블라블라 어쩌구 저쩌구 ~~~~~~~~~~
      </p>
    </Container>
  );
};

export default ProfileManageView;