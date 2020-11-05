import React from "react";
import { Button, Container, Icon, Modal } from "semantic-ui-react";

const SignoutModalView = ({
  signoutOpen,
  onSignoutModal,
  account,
  onSignout,
}) => {
  return (
    <Modal
      size="mini"
      onClose={() => onSignoutModal(false)}
      onOpen={() => onSignoutModal(true)}
      open={signoutOpen}
    >
      <Modal.Content>
        <Container textAlign="center" style={{ fontWeight: "bold" }}>
          {account.name} 회원님, 로그아웃 하시겠습니까?
        </Container>
      </Modal.Content>
      <Modal.Actions style={{ background: "white" }}>
        <Button basic onClick={() => onSignoutModal(false)}>
          <Icon name="remove" />
          취소
        </Button>
        <Button style={{ background: "#FFB517" }} onClick={() => onSignout()}>
          <Icon name="checkmark" />
          로그아웃
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SignoutModalView;
