import React, { useState } from "react";
import {
  Form,
  Grid,
  Input,
  Image,
  TextArea,
  Dropdown,
  Menu,
} from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfileAccountModifyView = ({
  account,
  onSetAccountProp,
  // name,
  // onChangeName,
}) => {
  console.log(account);
  const modifyTitle = 4;
  const modifyContent = 10;
  const genderOptions = [
    {
      key: "남성",
      text: "남성",
      value: "남성",
    },
    {
      key: "여성",
      text: "여성",
      value: "여성",
    },
    {
      key: "비공개",
      text: "비공개",
      value: "비공개",
    },
  ];

  return (
    <Form style={{ width: "95%" }}>
      <Grid stackable>
        <Grid.Row columns={3}>
          {/* <Grid.Column width={1}></Grid.Column> */}
          {/* 프로필 이미지 */}
          <Grid.Column
            width={4}
            // style={{
            //   height: "80px",
            //   width: "80px",
            // }}
          >
            <Image
              src="/profiles/peng.png"
              size="tiny"
              bordered
              circular
              centered
              style={{
                marginLeft: "50px",
                // width: "100%",
                // height: "100%",
                // objectFit: "cover",
                // overfollow: "hidden",
              }}
              label={{ as: "a", corner: "right", icon: "setting" }}
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
              <label>이름</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input
              fluid
              // value={name}
              // onChange={onChangeName}
              placeholder={account.name}
              value={account.name}
              onChange={(e) => onSetAccountProp("name", e.target.value)}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>생년월일</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <Input
              fluid
              placeholder={account.birth}
              value={account.birth}
              type="date"
              onChange={(e) => {
                onSetAccountProp("birth", e.target.value);
              }}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>성별</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            {/* <Input
              fluid
              value={account.gender}
              onChange={(e) => onSetAccountProp("gender", e.target.value)}
            /> */}

            <Dropdown
              fluid
              selection
              options={genderOptions}
              value={account.gender}
              onChange={(e, { value }) => onSetAccountProp("gender", value)}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={modifyTitle}>
            <aside>
              <label>소개글</label>
            </aside>
          </Grid.Column>
          <Grid.Column width={modifyContent}>
            <TextArea
              placeholder={account.introduce}
              value={account.introduce}
              style={{ minHeight: 150 }}
              onChange={(e) => onSetAccountProp("introduce", e.target.value)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfileAccountModifyView;
