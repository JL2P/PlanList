import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommentInputFormView from "../../../todo/view/comment/CommentInputFormView";

@inject("Store")
@observer
class GroupTodoCommentContainer extends Component {
  createComment = (text) => {
    const { comment, setReply } = this.props;
    const { group } = this.props.Store;

    alert(test);
    // const seletedTodo = group.getTodo;

    // if (comment) {
    //   group.addSubComment(seletedTodo.todoId, comment.commentId, {
    //     targetId: comment.writer,
    //     text: text,
    //   });
    //   setReply(false);
    // } else {
    //   group.addComment(seletedTodo.todoId, { text: text });
    // }
  };

  render() {
    return <CommentInputFormView createComment={this.createComment} />;
  }
}

export default GroupTodoCommentContainer;
