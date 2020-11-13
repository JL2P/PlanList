import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const DetailGroupAllListModal = ({ setOpen, item }) => {
  console.log(item)
  return (
    <>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={item.imgUrl} wrapped />
        <Modal.Description>
          <Header>{item.title}</Header>
          <p>{item.description}</p>
          <p>참여한 멤버 수 : 0 명</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          수정
        </Button>
        <Button color="red" onClick={() => setOpen(false)}>
          삭제
        </Button>
      </Modal.Actions>
    </>
  );
};

export default DetailGroupAllListModal;
