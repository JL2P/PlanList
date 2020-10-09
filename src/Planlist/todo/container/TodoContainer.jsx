import React, { Component } from "react";
import TodoUpdateView from "../view/TodoUpdateView";

class TodoContainer extends Component {
   
    todoEdit = () => {
    console.log("저장되었습니다.");
  };

  render() {
    return (
    <TodoUpdateView todoEdit={this.todoEdit}
             />
    )
        
    
}
}

export default TodoContainer;