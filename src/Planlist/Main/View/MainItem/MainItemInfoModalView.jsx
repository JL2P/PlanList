import React from "react";
import "./itemModalStyle.css";
import { Link } from "react-router-dom";
import { Modal, Image, Label, Button, Icon } from "semantic-ui-react";

const MainItemInfoModalView = ({
  todo,
  open,
  onModal,
  onLikeButton,
  children,
}) => {
  const onLike = () => {
    const todoId = todo.todoId;
    //좋아요 상태면 좋아요 삭제
    //좋아요 상태가 아니면 좋아요 추가
    const action = todo.likeState === false ? "ADD" : "DELETE";

    onLikeButton(todoId, action);
  };

  return (
    <Modal
      onClose={() => onModal(false)}
      onOpen={() => onModal(true)}
      open={open}
      size="small"
    >
      <Modal.Header>
        {todo.groupAt === "Y" ? "그룹 계획" : "개인 계획"}
      </Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={todo.imgUrl} style={{ maxHeight: "300px" }} />
        <div className="modal__description">
          <Modal.Description>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </Modal.Description>
          <div className="modal__description__info">
            <Link to={`/account/${todo.writer}`}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={todo.accountModel ? todo.accountModel.imgUrl : ""}
                  bordered
                  centered
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <b
                  style={{
                    fontSize: "24px",
                    marginLeft: "0.5em",
                    marginRight: "0.5em",
                    marginBottom: "0.5em",
                  }}
                >
                  {todo.writer}
                </b>
              </div>
            </Link>
            <Button
              style={{ padding: "1em", background: "#ffffff" }}
              onClick={() => {
                onLike();
              }}
            >
              <Icon
                name="heart"
                size="large"
                color={todo.likeState === true ? "red" : "black"}
                style={{
                  marginBottom: "0.2em",
                }}
              />{" "}
              <b
                style={{
                  fontSize: "16px",
                  marginRight: "0.2em",
                }}
              >
                {todo.likePoint}
              </b>
            </Button>
          </div>
        </div>
      </Modal.Content>
      {children}
    </Modal>
  );
};

export default MainItemInfoModalView;
