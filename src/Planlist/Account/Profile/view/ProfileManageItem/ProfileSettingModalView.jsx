import React, { useState } from "react";
import { Container, Modal, Menu, Grid, Button, Icon } from "semantic-ui-react";
import ProfileAccountModifyView from "../ProfileModifyItem/ProfileAccountModifyView";
import ProfileAccountPrivacyView from "../ProfileModifyItem/ProfileAccountPrivacyView";
import WithdrawalModalView from "./WithdrawalModalView";

const ProfileSettingModalView = ({
  settingOpen,
  onSettingModal,
  activeItem,
  handleItemClick,
  account,
  // loginId,
  loginCheck,
  onSignout,
  onModifyUser,
  onSetAccountProp,
  onDeleteUser,
}) => {
  const modal_height = "400px";

  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const onWithdrawalModal = (trigger) => {
    setWithdrawalOpen(trigger);
  };

  // const [name, setName] = useState(account.name);
  // const onChangeName = (e) => setName(e.target.value);

  return (
    <Modal
      onClose={() => onSettingModal(false)}
      onOpen={() => onSettingModal(true)}
      open={settingOpen}
      style={{ width: "700px" }}
    >
      {/* 회원탈퇴 모달 */}
      <WithdrawalModalView
        withdrawalOpen={withdrawalOpen}
        onWithdrawalModal={onWithdrawalModal}
        onDeleteUser={onDeleteUser}
        account={account}
        // name={name}
        // onChangeName={onChangeName}
      />

      <Modal.Header>
        <Container textAlign="center">설정</Container>
      </Modal.Header>

      <Grid style={{ marginTop: "15px" }}>
        <Grid.Column width={3}>
          <Modal.Content style={{ height: modal_height }}>
            <Menu
              vertical
              tabular
              pointing
              secondary
              style={{ height: modal_height, width: "120px" }}
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
                // href="/account"
                name="로그아웃"
                active={activeItem === "로그아웃"}
                onClick={() => {
                  onSettingModal(false);
                  onSignout();
                }}
              />

              <Menu.Item
                // href="/"
                name="회원탈퇴"
                active={activeItem === "회원탈퇴"}
                onClick={() => {
                  onWithdrawalModal(true);
                  // onDeleteUser(account.accountId);
                }}
              />
            </Menu>
          </Modal.Content>
        </Grid.Column>

        <Grid.Column stretched width={13} margin-right={2} stackable>
          <Modal.Content
            scrolling
            image
            style={{ width: "100%", height: modal_height }}
          >
            <div>
              {activeItem === "내정보 관리" && (
                <ProfileAccountModifyView
                  account={account}
                  onSetAccountProp={onSetAccountProp}
                  // onModifyUser={onModifyUser}
                />
              )}
              {/* {activeItem === "비밀번호 변경" && (
                <ProfilePasswordModifyView account={account} />
              )} */}
              {activeItem === "공개 범위 설정" && (
                <ProfileAccountPrivacyView
                  account={account}
                  onSetAccountProp={onSetAccountProp}
                />
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
          // href="/account"
          style={{ background: "#FFB517" }}
          onClick={() => {
            onModifyUser(account);
            onSettingModal(false);
          }}
          // onClick={(e) => {
          //   onModifyUser(e, {
          //     accountId: account.accountId,
          //     email: account.email,
          //     name: name,
          //     birth: "",
          //     gender: "",
          //     introduce: "",
          //     loginType: "",
          //     openAt: "",
          //     usedAt: "",
          //   });
          // }}
        >
          <Icon name="checkmark" /> 저장
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProfileSettingModalView;
