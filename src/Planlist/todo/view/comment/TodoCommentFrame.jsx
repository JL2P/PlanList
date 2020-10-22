import React, { useState } from "react";
import TodoCommentFormVIew from "./TodoCommentFormView";
import TodoCommentContainer from "../../container/TodoCommentContainer";

import { Comment, Form, Divider } from "semantic-ui-react";
const TodoCommentFrame = () => {
  const [reply, setReply] = useState(false);

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
            댓글 4개 모두 보기
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
            <TodoCommentFormVIew
              author="Matt"
              text="How artistic!"
              time="Today at 5:42PM"
              subComment={
                <TodoCommentFormVIew
                  author="Matt"
                  text="How artistic!"
                  time="Today at 5:42PM"
                />
              }
            />
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
