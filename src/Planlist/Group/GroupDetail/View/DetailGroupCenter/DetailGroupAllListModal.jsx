import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Label, Icon, Image, Modal } from "semantic-ui-react";

const DetailGroupAllListModal = ({
  loginAccount,
  setOpen,
  groupTodo,
  children,
  onAttendGroupTodo,
}) => {
  return (
    <>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={groupTodo.imgUrl}
          wrapped
          style={{ maxHeight: "360px" }}
        />

        <div className="modal__description">
          <Modal.Description>
            <Header>{groupTodo.title}</Header>
            <p>{groupTodo.description}</p>
          </Modal.Description>
          <div>
            <div className="modal__description__info">
              <Link to={`/account/${groupTodo.writer}`}>
                <Label basic image>
                  <img src={groupTodo.imgUrl} alt="jsx-a11y/alt-text" />
                  {groupTodo.writer}
                </Label>
              </Link>
              <Label basic>
                <Icon name="heart" color="red" /> {groupTodo.likePoint}
              </Label>
            </div>
            <Button
              fluid
              style={{
                marginTop: "0.5em",
                background: "#ffb517",
                color: "#ffffff",
              }}
              onClick={() => {
                onAttendGroupTodo();
              }}
            >
              계획 참여하기
            </Button>
          </div>
        </div>
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
