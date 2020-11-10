import React, { Component } from "react";
import CommentInputFormView from "../view/comment/CommentInputFormView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoCommentContainer extends Component {
  createComment = (text) => {
    const { comment, setReply } = this.props;
    const { todo } = this.props.Store;

    const seletedTodo = todo.getTodo;

    if (comment) {
      todo.addSubComment(seletedTodo.todoId, comment.commentId, {
        targetId: comment.writer,
        text: text,
      });
      setReply(false);
    } else {
      todo.addComment(seletedTodo.todoId, { text: text });
    }
  };

  updateComment = (comment) => {
    alert(comment, "update");
  };

  render() {
    return (
      <CommentInputFormView
        createComment={this.createComment}
        updateComment={this.updateComment}
      />
    );
  }
}

export default TodoCommentContainer;
