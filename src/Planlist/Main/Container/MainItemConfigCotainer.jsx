import React, { Component } from "react";
import MainItemConfigModalView from "../View/MainItem/MainItemConfigModalView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class MainItemConfigCotainer extends Component {
  onDeleteTodo = () => {
    const todoId = this.props.todo.id;
    const { todo } = this.props.Store;
    todo.deleteTodo(todoId);
    //모달창 닫기
    this.props.onModal(false);
  };

  render() {
    const { open, onModal, onTodoUpdateModal } = this.props;

    return (
      <MainItemConfigModalView
        open={open}
        onModal={onModal}
        onTodoUpdateModal={onTodoUpdateModal}
        onDeleteTodo={this.onDeleteTodo}
      />
    );
  }
}

export default MainItemConfigCotainer;
