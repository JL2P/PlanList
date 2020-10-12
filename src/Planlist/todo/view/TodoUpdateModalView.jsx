import React from "react";
import TodoUpdateView from "./TodoUpdateView";
import { Modal } from "semantic-ui-react";
const TodoUpdateModalView = ({ open, onModal }) => {
  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      basic
      open={open}
      size="large"
    >
      <TodoUpdateView />
    </Modal>
  );
};

export default TodoUpdateModalView;
