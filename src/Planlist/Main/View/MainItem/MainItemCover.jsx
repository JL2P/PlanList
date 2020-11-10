import React from "react";
import { Icon, Button } from "semantic-ui-react";
const MainItemCover = ({ todoModel, onCofigModal, onLikeButton }) => {
  const onLike = () => {
    const todoId = todoModel.todoId;
    //좋아요 상태면 좋아요 삭제
    //좋아요 상태가 아니면 좋아요 추가
    const action = todoModel.likeState === false ? "ADD" : "DELETE";

    onLikeButton(todoId, action);
  };

  return (
    <div className="todo__subitem">
      <Button
        style={{ padding: "1em", background: "#ffffff" }}
        onClick={() => {
          onLike();
        }}
      >
        <Icon
          name="heart"
          color={todoModel.likeState === true ? "red" : "black"}
        />
        {todoModel.likePoint}
      </Button>

      <Button
        icon
        style={{ padding: "1em", background: "#ffffff" }}
        onClick={() => {
          onCofigModal(true);
        }}
      >
        <Icon name="ellipsis horizontal" />
      </Button>
    </div>
  );
};

export default MainItemCover;
