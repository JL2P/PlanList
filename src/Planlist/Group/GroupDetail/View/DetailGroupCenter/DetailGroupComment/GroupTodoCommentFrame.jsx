import React, { useState } from "react";
import { Comment, Form, Divider } from "semantic-ui-react";
import GroupTodoCommentContainer from "../../../Container/GroupTodoCommentContainer";
import GroupTodoCommentFormVIew from "./GroupTodoCommentFormVIew";

const GroupTodoCommentFrame = ({ comments, loginAccount, onDeleteComment }) => {
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
              <GroupTodoCommentFormVIew
                key={comment.commentId}
                loginAccount={loginAccount}
                comment={comment}
                onDeleteComment={onDeleteComment}
              >
                {comment.subComments.length > 0 &&
                  comment.subComments.map((subComment) => (
                    <GroupTodoCommentFormVIew
                      key={subComment.subCommentId}
                      loginAccount={loginAccount}
                      comment={subComment}
                      onDeleteComment={onDeleteComment}
                    />
                  ))}
              </GroupTodoCommentFormVIew>
            ))}
          </div>
        )}
        <Form reply>
          <GroupTodoCommentContainer />
        </Form>
      </Comment.Group>
    </div>
  );
};

export default GroupTodoCommentFrame;
