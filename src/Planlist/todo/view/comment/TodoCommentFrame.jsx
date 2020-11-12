import React, { useState } from "react";
import TodoCommentFormVIew from "./TodoCommentFormView";
import TodoCommentContainer from "../../container/TodoCommentContainer";

import { Comment, Form, Divider } from "semantic-ui-react";

const TodoCommentFrame = ({ comments, onDeleteComment }) => {
  const [reply, setReply] = useState(false);

  const commentCounter = () => {
    let count = 0;
    for (let i = 0; i < comments.length; i++) {
      const subComments = comments[i].subComments;
      count += subComments.length;
    }
    return comments.length + count;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Comment.Group style={{ maxWidth: "100%", width: "95%" }}>
        <Divider />

        {!reply && (
          <p
            onClick={() => {
              setReply(!reply);
            }}
          >
            댓글 {commentCounter()}개 모두 보기
          </p>
        )}
        {reply && (
          <div>
            <p
              onClick={() => {
                setReply(!reply);
              }}
            >
              댓글 숨기기
            </p>

            {comments.map((comment) => (
              <TodoCommentFormVIew
                key={comment.commentId}
                comment={comment}
                onDeleteComment={onDeleteComment}
              >
                {comment.subComments.length > 0 &&
                  comment.subComments.map((subComment) => (
                    <TodoCommentFormVIew
                      key={subComment.subCommentId}
                      comment={subComment}
                      onDeleteComment={onDeleteComment}
                    />
                  ))}
              </TodoCommentFormVIew>
            ))}
          </div>
        )}
        <Form reply>
          <TodoCommentContainer />
        </Form>
      </Comment.Group>
    </div>
  );
};

export default TodoCommentFrame;
