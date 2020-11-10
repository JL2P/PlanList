import React, { useState } from "react";
import { Comment, Form, Icon, Label } from "semantic-ui-react";
import TodoCommentContainer from "../../container/TodoCommentContainer";
import { Link } from "react-router-dom";
import "./todoCommentFormStyle.css";

const TodoCommentFormVIew = ({ comment, children }) => {
  const [reply, setReply] = useState(false);

  const onReply = () => setReply(!reply);

  return (
    <Comment>
      <Comment.Avatar src="/posts/img_crong.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{comment.writer}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.created}</div>
          <Icon name="heart" />
        </Comment.Metadata>
        <Comment.Text>
          {comment.targetId && (
            <Link to={`/account/${comment.targetId}`}>
              <span style={{ color: "#FFB517" }}>@{comment.targetId}</span>
            </Link>
          )}{" "}
          {comment.text}
        </Comment.Text>
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
          <TodoCommentContainer comment={comment} setReply={setReply} />
        </Form>
      </Comment.Content>
      {children && (
        <Comment.Group style={{ maxWidth: "100%" }}>{children}</Comment.Group>
      )}
    </Comment>
  );
};

export default TodoCommentFormVIew;
