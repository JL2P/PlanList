import React, { useState } from "react";
import { Comment, Form, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./groupTodoCommentFormStyle.css";
import GroupTodoCommentContainer from "../../../Container/GroupTodoCommentContainer";

const GroupTodoCommentFormVIew = ({
  comment,
  loginAccount,
  onDeleteComment,
  children,
}) => {
  const [reply, setReply] = useState(false);
  const onReply = () => setReply(!reply);
  return (
    <Comment>
      <Comment.Content>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={
              comment.galleries
                ? comment.galleries.length > 0
                  ? comment.galleries[0].filePath
                  : comment.imgUrl
                : null
            }
            bordered
            centered
            style={{
              width: "25px",
              height: "25px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Comment.Author as="a">
                <b style={{ fontSize: "14px", marginLeft: "0.2em" }}>
                  {comment.writer}
                </b>
              </Comment.Author>
              <Comment.Metadata>
                <div>{comment.created}</div>
                {/* <Icon name="heart" /> */}
              </Comment.Metadata>{" "}
            </div>
            {loginAccount.accountId === comment.writer && (
              <Icon
                name="x"
                color="red"
                style={{ marginRight: "1em", cursor: "pointer" }}
                onClick={() => {
                  onDeleteComment(comment);
                }}
              />
            )}
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "0.3em" }}
        >
          <Comment.Text>
            {comment.targetId && (
              <Link to={`/account/${comment.targetId}`}>
                <span style={{ color: "#FFB517" }}>@{comment.targetId}</span>
              </Link>
            )}{" "}
            {comment.text}
          </Comment.Text>
          <Comment.Actions style={{ marginLeft: "0.5em" }}>
            <Comment.Action
              onClick={() => {
                onReply();
              }}
            >
              댓글 달기
            </Comment.Action>
          </Comment.Actions>
        </div>
        <Form reply className={reply ? "onReply" : "offReply"}>
          <GroupTodoCommentContainer comment={comment} setReply={setReply} />
        </Form>
      </Comment.Content>
      {children && (
        <Comment.Group style={{ maxWidth: "100%" }}>{children}</Comment.Group>
      )}
    </Comment>
  );
};

export default GroupTodoCommentFormVIew;
