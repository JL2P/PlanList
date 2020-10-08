import React, { Component } from "react";
import TodoView from "../view/TodoView";

class TodoContainer extends Component {
   
    todoEdit = () => {
    console.log("저장되었습니다.");
  };

  render() {
    return (
    <TodoView todoEdit={this.todoEdit}
             />
    )
        
    
}
}

export default TodoContainer;