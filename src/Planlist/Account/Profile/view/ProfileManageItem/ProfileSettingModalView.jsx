import React from "react";
import { Container, Modal, Menu, Grid, Button, Icon } from "semantic-ui-react";
import ProfileAccountModifyView from "../ProfileModifyItem/ProfileAccountModifyView";
import ProfileAccountPrivacyView from "../ProfileModifyItem/ProfileAccountPrivacyView";
import ProfilePasswordModifyView from "../ProfileModifyItem/ProfilePasswordModifyView";

const ProfileSettingModalView = ({
  open,
  onOpen,
  activeItem,
  handleItemClick,
  account,
  onModifyAccount,
}) => {
  return (
    <Modal open={open}>
      <Modal.Header>
        <Container textAlign="center">설정</Container>
      </Modal.Header>

      <Grid style={{ marginTop: "15px" }}>
        <Grid.Column width={4}>
          <Modal.Content style={{ height: "506px" }}>
            <Menu vertical tabular pointing secondary>
              <Menu.Item
                name="내정보 관리"
                active={activeItem === "내정보 관리"}
                onClick={() => handleItemClick("내정보 관리")}
              />
              <Menu.Item
                name="비밀번호 변경"
                active={activeItem === "비밀번호 변경"}
                onClick={() => handleItemClick("비밀번호 변경")}
              />

              <Menu.Item
                name="공개 범위"
                active={activeItem === "공개 범위 설정"}
                onClick={() => handleItemClick("공개 범위 설정")}
              />
            </Menu>
          </Modal.Content>
        </Grid.Column>

        <Grid.Column stretched width={12} margin-right={2} stackable>
          <Modal.Content scrolling style={{ width: "100%" }}>
            <div>
              {activeItem === "내정보 관리" && (
                <ProfileAccountModifyView account={account} />
              )}
              {activeItem === "비밀번호 변경" && (
                <ProfilePasswordModifyView account={account} />
              )}
              {activeItem === "공개 범위 설정" && (
                <ProfileAccountPrivacyView account={account} />
              )}
            </div>
          </Modal.Content>
        </Grid.Column>
      </Grid>
      <Modal.Actions>
        <Button basic onClick={() => onOpen(false)}>
          <Icon name="remove" /> 취소
        </Button>
        <Button style={{ background: "#FFB517" }} onClick={() => onOpen(false)}>
          <Icon name="checkmark" /> 저장
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProfileSettingModalView;
