import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MainItemInfoModalView from "../View/MainItem/MainItemInfoModalView";
import TodoCommentFrame from "../../todo/view/comment/TodoCommentFrame";

@inject("Store")
@observer
class MainItemInfoContainer extends Component {
  render() {
    const { todo } = this.props.Store;
    const seletedTodo = todo.getTodo;

    const seletedTodoComments = todo.getComments;

    const { open, onModal } = this.props;
    return (
      <MainItemInfoModalView todo={seletedTodo} open={open} onModal={onModal}>
        <TodoCommentFrame comments={seletedTodoComments} />
      </MainItemInfoModalView>
    );
  }
}

export default MainItemInfoContainer;
