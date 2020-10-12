import React, { Component } from "react";
import { Card, Form, Grid, Input, Segment } from "semantic-ui-react";
import "./ProfileModifyView.scss";

const ProfileModifyView = ({ account }) => {
  /**
	private String accountId; 
  private String name;  
  private String email; 
	private String password; //
	private String birth; 
	private String gender; 
	private String address; 
	private String phone; 
	private String introduce; 
	private int rating; //
	private String usedAt; //
	private String displayAt; //
 */
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

export default ProfileModifyView;
