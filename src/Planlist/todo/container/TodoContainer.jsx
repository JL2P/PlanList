import React, { Component } from "react";
import TodoUpdateView from "../view/TodoUpdateView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoContainer extends Component {
  onEditTodo = (e, todoObj) => {
    // e 새로고침 방지 추가
    e.preventDefault();
    // Store에서 todo Store가져오기
    console.log("수정되었습니다.");
    const { todo } = this.props.Store;
    //todo수정 실행
    todo.editTodo(todoObj);
  };
  onSaveTodo = (e, todoObj) => {
    console.log("저장되었습니다.");
    const { todo } = this.props.Store;
    //todo추가 실행
    todo.saveTodo(todoObj);
  };

  render() {
    return <TodoUpdateView onSaveTodo={this.onSaveTodo} />;
  }
}

export default TodoContainer;
