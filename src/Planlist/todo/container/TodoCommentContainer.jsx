import React, { Component } from "react";
import CommentInputFormView from "../view/comment/CommentInputFormView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoCommentContainer extends Component {
  createComment = (text) => {
    const { todo } = this.props.Store;

    const writer = "giant_peng";
    const seletedTodo = todo.getTodo;
    todo.addComment(seletedTodo.todoId, { text: text, writer: writer });
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
