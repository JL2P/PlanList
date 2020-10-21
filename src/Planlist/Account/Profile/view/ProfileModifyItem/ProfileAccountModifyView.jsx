import React from "react";
import { Form, Grid, Input, Image } from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfileAccountModifyView = ({ account }) => {
  const colWidth = 4;
  return (
    <Form style={{ width: "95%" }}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <Image src="/profiles/hungry.png" size="tiny" bordered circular />
          </Grid.Column>
          <Grid.Column>{account.accountId}</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>아이디</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid placeholder={account.accountId} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>이름</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.name} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>이메일</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.email} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>전화번호</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.phone} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>생년월일</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.birth} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>성별</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.gender} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>주소</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.address} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>소개글</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
            <Input fluid placeholder={account.introduce} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfileAccountModifyView;
