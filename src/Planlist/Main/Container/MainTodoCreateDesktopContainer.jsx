import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TodoCreateDesktopForm from "../../todo/view/TodoCreateDesktopForm";
import MainCreateTodoDesktopView from "../View/MainCreateTodoDesktopView";

@inject("Store")
@observer
class MainTodoCreateDesktopContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: "",
      open: false,
    };
  }

  onModal = (flag) => {
    this.setState({ open: flag });
  };

  changeTodoTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  onEnterModal = (e) => {
    if (e.key === "Enter") {
      // todo 모달 열기
      this.setState({ open: true });
    }
  };

  //Todo 생성
  createTodo = () => {
    console.log("Todo Create");
  };

  render() {
    const { open, todoTitle } = this.state;

    return (
      <div style={{ background: "#1b1c1d" }}>
        <TodoCreateDesktopForm
          open={open}
          onModal={this.onModal}
          title={todoTitle}
          onChangeTitle={this.changeTodoTitle}
          createTodo={this.createTodo}
        />
        <MainCreateTodoDesktopView
          title={todoTitle}
          onChangeTitle={this.changeTodoTitle}
          onCreateTodoModal={this.onModal}
          onEnterCreateTodoModal={this.onEnterModal}
        />
      </div>
    );
  }
}

export default MainTodoCreateDesktopContainer;
