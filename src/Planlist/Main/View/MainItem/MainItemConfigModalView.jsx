import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
const MainItemConfigModalView = ({
  open,
  onModal,
  onTodoUpdateModal,
  onDeleteTodo,
}) => {
  return (
    <Modal
      basic
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="mini"
    >
      <Header icon>
        <Icon name="cog" />
      </Header>
      <Modal.Content>
        <Button
          fluid
          basic
          inverted
          color="yellow"
          style={{ marginBottom: "1em" }}
        >
          <Icon name="star" /> 추천하기
        </Button>
        <Button
          fluid
          basic
          inverted
          color="green"
          style={{ marginBottom: "1em" }}
          onClick={onTodoUpdateModal}
        >
          <Icon name="configure" /> 글 수정
        </Button>
        <Button
          fluid
          basic
          inverted
          color="red"
          style={{ marginBottom: "1em" }}
          onClick={onDeleteTodo}
        >
          <Icon name="remove" /> 글 삭제
        </Button>
        <Button
          fluid
          basic
          inverted
          style={{ marginBottom: "1em" }}
          onClick={() => onModal(false)}
        >
          <Icon name="dont" /> 취소
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default MainItemConfigModalView;
