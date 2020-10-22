import React from "react";
import { Checkbox, Form, Grid } from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfileAccountPrivacyView = ({ account }) => {
  return (
    <Form style={{ width: "95%" }}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <h3>계정 공개 범위 설정</h3>
            <p>
              계정이 비공개 상태인 경우 회원님이 승인한 사람만 회원님의 계획을
              볼 수 있습니다.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Checkbox label="비공개 계정" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfileAccountPrivacyView;
