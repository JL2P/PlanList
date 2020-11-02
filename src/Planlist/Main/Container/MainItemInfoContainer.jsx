import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MainItemInfoModalView from "../View/MainItem/MainItemInfoModalView";
import TodoCommentFrame from "../../todo/view/comment/TodoCommentFrame";
import SampleAccounts from "../../Sample/Data/AccountSample/SampleAccounts";

@inject("Store")
@observer
class MainItemInfoContainer extends Component {
  render() {
    const { todo } = this.props.Store;

    const loginAccount = SampleAccounts[Math.floor(Math.random() * 8)];
    const seletedTodo = todo.getTodo;
    const seletedTodoComments = todo.getComments;

    const { open, onModal } = this.props;
    return (
      <MainItemInfoModalView todo={seletedTodo} open={open} onModal={onModal}>
        <TodoCommentFrame
          comments={seletedTodoComments}
          account={loginAccount}
        />
      </MainItemInfoModalView>
    );
  }
}

export default MainItemInfoContainer;
