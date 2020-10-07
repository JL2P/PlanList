import React, { Component } from "react";
import TodoView from "../view/TodoView";

class TodoContainer extends Component {
  todoSave = () => {
    console.log("저장되었습니다.");
  };

  render() {
    return <TodoView todoSave={this.todoSave} />;
  }
}

export default TodoContainer;