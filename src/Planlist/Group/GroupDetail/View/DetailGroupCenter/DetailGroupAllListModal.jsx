import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const DetailGroupAllListModal = ({
  loginAccount,
  setOpen,
  groupTodo,
  children,
}) => {
  return (
    <>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={groupTodo.imgUrl} wrapped />
        <Modal.Description>
          <Header>{groupTodo.title}</Header>
          <p>{groupTodo.description}</p>
          <p>참여한 멤버 수 : {groupTodo.members.length} 명</p>
        </Modal.Description>
      </Modal.Content>
      {children}

      {/* 내가 작성한 Todo만 삭제가능 */}
      {loginAccount.accountId === groupTodo.writer && (
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            수정
          </Button>
          <Button color="red" onClick={() => setOpen(false)}>
            삭제
          </Button>
        </Modal.Actions>
      )}
    </>
  );
};

export default DetailGroupAllListModal;
