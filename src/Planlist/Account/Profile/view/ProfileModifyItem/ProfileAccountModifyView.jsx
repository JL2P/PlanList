import React, { Component } from "react";
import { Card, Form, Grid, Input, Segment } from "semantic-ui-react";

const ProfileAccountModifyView = ({ account }) => {
  const colWidth = 4;
  return (
    <Form>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={colWidth}>
            <aside>
              <label>아이디</label>
            </aside>
          </Grid.Column>
          <Grid.Column>
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
      </Grid>
    </Form>
  );
};

export default ProfileAccountModifyView;
