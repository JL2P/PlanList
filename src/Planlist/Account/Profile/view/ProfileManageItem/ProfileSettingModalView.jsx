import React from "react";
import { Container, Modal, Menu, Grid, Button, Icon } from "semantic-ui-react";
import ProfileAccountModifyView from "../ProfileModifyItem/ProfileAccountModifyView";
import ProfileAccountPrivacyView from "../ProfileModifyItem/ProfileAccountPrivacyView";

const ProfileSettingModalView = ({
  
  settingOpen,
  onSettingModal,
  activeItem,
  handleItemClick,
  accounts,
  account,
  loginId,
  loginCheck,
  onModifyUser,
  onSetAccountProp,
  onDeleteUser,
}) => {
  const modal_height = "560px";
  return (
    <Modal
      onClose={() => onSettingModal(false)}
      onOpen={() => onSettingModal(true)}
      open={settingOpen}
    >
      <Modal.Header>
        <Container textAlign="center">설정</Container>
      </Modal.Header>

      <Grid style={{ marginTop: "15px" }}>
        <Grid.Column width={4}>
          <Modal.Content style={{ height: modal_height }}>
            <Menu
              vertical
              tabular
              pointing
              secondary
              style={{ height: "610px" }}
            >
              <Menu.Item
                name="내정보 관리"
                active={activeItem === "내정보 관리"}
                onClick={() => handleItemClick("내정보 관리")}
              />

              {/* <Menu.Item
                name="비밀번호 변경"
                active={activeItem === "비밀번호 변경"}
                onClick={() => handleItemClick("비밀번호 변경")}
              /> */}

              <Menu.Item
                name="공개 범위"
                active={activeItem === "공개 범위 설정"}
                onClick={() => handleItemClick("공개 범위 설정")}
              />

              <Menu.Item
                name="로그아웃"
                active={activeItem === "로그아웃"}
                onClick={() => {
                  onSettingModal(false);
                }}
              />

              <Menu.Item
                href="/"
                name="회원탈퇴"
                active={activeItem === "회원탈퇴"}
                onClick={() => onDeleteUser(account.accountId)}
              />
            </Menu>
          </Modal.Content>
        </Grid.Column>

        <Grid.Column stretched width={12} margin-right={2} stackable>
          <Modal.Content
            scrolling
            image
            style={{ width: "100%", height: modal_height }}
          >
            <div>
              {activeItem === "내정보 관리" && (
                <ProfileAccountModifyView
                  account={account}
                  accounts={accounts}
                  onSetAccountProp={onSetAccountProp}
                  onModifyUser={onModifyUser}
                />
              )}
              {/* {activeItem === "비밀번호 변경" && (
                <ProfilePasswordModifyView account={account} />
              )} */}
              {activeItem === "공개 범위 설정" && (
                <ProfileAccountPrivacyView account={account} />
              )}
              {activeItem === "로그아웃"}
              {activeItem === "회원탈퇴"}
            </div>
          </Modal.Content>
        </Grid.Column>
      </Grid>
      <Modal.Actions>
        <Button basic onClick={() => onSettingModal(false)}>
          <Icon name="remove" /> 취소
        </Button>
        <Button
          href="/account"
          style={{ background: "#FFB517" }}
          onClick={() => {
            onModifyUser(account);
            // onSettingModal(false);
          }}
        >
          <Icon name="checkmark" /> 저장
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProfileSettingModalView;
