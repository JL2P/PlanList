import React, { useState } from "react";
import { Comment, Form, Icon } from "semantic-ui-react";
import TodoCommentContainer from "../../container/TodoCommentContainer";
import "./todoCommentFormStyle.css";

const TodoCommentFormVIew = ({ author, text, time, subComment }) => {
  const [reply, setReply] = useState(false);

  const onReply = () => setReply(!reply);

  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{time}</div>
          <Icon name="heart" />
        </Comment.Metadata>
        <Comment.Text>{text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action
            onClick={() => {
              onReply();
            }}
          >
            Reply
          </Comment.Action>
        </Comment.Actions>
        <Form reply className={reply ? "onReply" : "offReply"}>
          <TodoCommentContainer />
        </Form>
      </Comment.Content>
      {subComment && (
        <Comment.Group style={{ maxWidth: "100%" }}>{subComment}</Comment.Group>
      )}
    </Comment>
  );
};

export default TodoCommentFormVIew;
