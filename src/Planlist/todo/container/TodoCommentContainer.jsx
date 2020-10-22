import React, { Component } from "react";
import CommentInputFormView from "../view/comment/CommentInputFormView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoCommentContainer extends Component {
  createComment = (comment) => {
    alert(comment, "create");
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
