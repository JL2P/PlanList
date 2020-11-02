import React, { useState } from "react";
import { Checkbox, Form, Grid, Input } from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfileAccountPrivacyView = ({ account, onSetAccountProp }) => {
  const [tf, setChecked] = useState(true);

  const onChecked = (value) => {
    if (account.openAt === "Y") {
      setChecked(true);
      onSetAccountProp("openAt", "N");
      // account.openAt = "N";
    } else {
      setChecked(false);
      onSetAccountProp("openAt", "Y");
      // account.openAt = "Y";
    }
  };

  console.log(tf, account.openAt);

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
            <Input
              value={account.openAt}
              onChange={(e) => onSetAccountProp("openAt", e.target.value)}
            ></Input>
            <Checkbox
              label="비공개 계정"
              checked={tf}
              value={tf}
              onChange={onChecked}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfileAccountPrivacyView;
