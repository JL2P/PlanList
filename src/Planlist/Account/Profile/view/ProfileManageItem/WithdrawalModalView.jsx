import React from "react";
import { Button, Container, Icon, Modal } from "semantic-ui-react";

const WithdrawalModalView = ({
  onDeleteUser,
  withdrawalOpen,
  onWithdrawalModal,
  account,
}) => {
  return (
    <Modal
      size="mini"
      onClose={() => onWithdrawalModal(false)}
      onOpen={() => onWithdrawalModal(true)}
      open={withdrawalOpen}
    >
      <Modal.Content>
        <Container textAlign="center" style={{ fontWeight: "bold" }}>
          {account.name} 회원님, Planit을 정말 탈퇴하시겠습니까?
        </Container>
      </Modal.Content>
      <Modal.Actions style={{ background: "white" }}>
        <Button basic onClick={() => onWithdrawalModal(false)}>
          <Icon name="remove" />
          취소
        </Button>
        <Button
          style={{ background: "#FFB517" }}
          onClick={() => onDeleteUser(account.accountId)}
        >
          <Icon name="checkmark" />
          탈퇴
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default WithdrawalModalView;
