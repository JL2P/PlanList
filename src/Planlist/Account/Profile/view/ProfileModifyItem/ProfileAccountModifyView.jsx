import React from "react";
import {
  Form,
  Grid,
  Input,
  Image,
  TextArea,
  Dropdown,
  Button,
} from "semantic-ui-react";
import "./ProfileModify.scss";

const ProfileAccountModifyView = ({
  account,
  onSetAccountProp,
  gallery_filePath,
  onChangeImage,
  onChangeName,
  onChangeBirth,
  onChangeGender,
  onChangeIntroduce,
  imgUrl,
  name,
  birth,
  gender,
  introduce,
}) => {
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
        <Grid.Row>
          {/* <Grid.Column width={1}></Grid.Column> */}
          {/* 프로필 이미지 */}
          <Grid.Column
            width={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src={
                imgUrl
                  ? imgUrl
                  : gallery_filePath
                  ? gallery_filePath
                  : account.imgUrl
              }
              bordered
              centered
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                marginBottom: "0.5em",
                borderRadius: "50%",
              }}
            />
            <Button
              basic
              as="label"
              htmlFor="profile_img"
              style={{ fontSize: "0.8em" }}
            >
              프로필 사진 바꾸기
            </Button>

            <input
              id="profile_img"
              type="file"
              multiple
              hidden
              onChange={onChangeImage}
              // onChange={(e) => onSetAccountProp("galleries", e.target.files[0])}
            />
          </Grid.Column>
          {/* 아이디, 이메일 */}
          <Grid.Column width={modifyContent} style={{ display: "flex" }}>
            <Grid style={{ marginLeft: "5px" }}>
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
              placeholder={account.name}
              value={name ? name : account.name}
              onChange={onChangeName}
              // onChange={(e) => onSetAccountProp("name", e.target.value)}
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
              value={birth ? birth : account.birth}
              type="date"
              onChange={onChangeBirth}
              // onChange={(e) => {
              //   onSetAccountProp("birth", e.target.value);
              // }}
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
            <Dropdown
              fluid
              selection
              options={genderOptions}
              value={gender ? gender : account.gender}
              onChange={onChangeGender}
              // onChange={(e, { value }) => onSetAccountProp("gender", value)}
              placeholder="성별"
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
              value={introduce ? introduce : account.introduce}
              style={{ minHeight: 150 }}
              onChange={onChangeIntroduce}
              // onChange={(e) => onSetAccountProp("introduce", e.target.value)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

export default ProfileAccountModifyView;
