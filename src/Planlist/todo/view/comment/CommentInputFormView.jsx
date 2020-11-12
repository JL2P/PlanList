import React from "react";
import { Input } from "semantic-ui-react";

const CommentInputFormView = ({ createComment }) => {
  const onKeyPressComment = (e) => {
    if (e.key === "Enter") createComment(e.target.value);
  };

  return (
    <>
      <Input
        fluid
        icon="pencil"
        iconPosition="left"
        placeholder="댓글 달기..."
        onKeyPress={onKeyPressComment}
      />
      <p style={{ marginTop: "0.5em", opacity: "0.8" }}>
        댓글을 게시하려면 Enter키를 입력하세요.
      </p>
    </>
  );
};

export default CommentInputFormView;
