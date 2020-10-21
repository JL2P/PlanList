import React from "react";
import { Form, Grid, Input } from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfilePasswordModifyView = ({ account }) => {
  const modifyTitle = 4;
  const modifyContent = 10;
  return (
    <Form style={{ background: "skyblue", width: "95%" }}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>이전 비밀번호</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder={account.accountId} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>새 비밀번호</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder={account.name} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>새 비밀번호 확인</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder={account.email} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfilePasswordModifyView;
