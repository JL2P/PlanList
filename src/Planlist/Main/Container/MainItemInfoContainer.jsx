import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MainItemInfoModalView from "../View/MainItem/MainItemInfoModalView";
import TodoCommentFrame from "../../todo/view/comment/TodoCommentFrame";

@inject("Store")
@observer
class MainItemInfoContainer extends Component {
  onDeleteComment = (comment) => {
    const commentType = comment.subCommentId ? "SUBCOMMENT" : "COMMENT";
    const { todo } = this.props.Store;

    //대댓글일 경우
    if (commentType === "SUBCOMMENT") {
      todo.deleteSubComment(comment);
    } //댓글일 경우
    else {
      todo.deleteComment(comment);
    }
  };

  render() {
    const { todo, account } = this.props.Store;
    const loginAccount = account.getLoginAccount;
    const seletedTodo = todo.getTodo;

    const seletedTodoComments = todo.getComments;

    const { open, onModal } = this.props;
    return (
      <MainItemInfoModalView todo={seletedTodo} open={open} onModal={onModal}>
        <TodoCommentFrame
          comments={seletedTodoComments}
          loginAccount={loginAccount}
          onDeleteComment={this.onDeleteComment}
        />
      </MainItemInfoModalView>
    );
  }
}

export default MainItemInfoContainer;
