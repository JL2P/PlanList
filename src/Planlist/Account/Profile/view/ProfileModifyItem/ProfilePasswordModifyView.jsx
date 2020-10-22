import React from "react";
import { Form, Grid, Input, Image } from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfilePasswordModifyView = ({ account }) => {
  const modifyTitle = 4;
  const modifyContent = 10;
  return (
    <Form style={{ width: "95%" }}>
      <Grid stackable>
        <Grid.Row columns={2}>
          {/* <Grid.Column width={1}></Grid.Column> */}
          {/* 프로필 이미지 */}
          <Grid.Column width={4}>
            <Image
              style={{ marginLeft: "65px" }}
              src="/profiles/hungry.png"
              size="tiny"
              bordered
              circular
            />
          </Grid.Column>
          {/* 아이디, 이메일 */}
          <Grid.Column width={modifyContent}>
            <Grid stackable style={{ marginLeft: "5px" }}>
              <Grid.Row style={{ fontSize: "30px", fontWeight: "bold" }}>
                {account.accountId}
              </Grid.Row>
              <Grid.Row style={{ fontSize: "15px", paddingTop: "1px" }}>
                {account.email}
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>  
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>이전 비밀번호</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder="" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>새 비밀번호</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder="" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>새 비밀번호 확인</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input fluid placeholder="" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfilePasswordModifyView;
