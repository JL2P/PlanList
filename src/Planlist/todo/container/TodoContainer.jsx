import React, { Component } from "react";
import TodoView from "../view/TodoView";

class TodoContainer extends Component {
      todoAdd = () => {
        console.log("추가되었습니다.");
      };
      todoUpdate = () => {
        console.log("수정되었습니다.");
      };
      todoDelete = () => {
        console.log("삭제되었습니다.");
      };
    todoSave = () => {
    console.log("저장되었습니다.");
  };

  render() {
    return (
    <TodoView todoSave={this.todoSave}
              todoAdd={this.todoAdd} 
              todoUpdate={this.todoUpdate}
              todoDelete={this.todoDelete}
       />

        )  
      }
}

export default TodoContainer;