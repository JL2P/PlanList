import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TodoCreateMobileForm from "../../todo/view/TodoCreateMobileForm";
import MainCreateTodoMobileView from "../View/MainCreateTodoMobileView";

@inject("Store")
@observer
class MainTodoCreateMobileContainer extends Component {
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
  createTodo = () => {};

  render() {
    const { open, todoTitle } = this.state;
    const today = this.props.Store.todo.getToday;

    return (
      <div style={{ background: "#1b1c1d" }}>
        <TodoCreateMobileForm
          open={open}
          onModal={this.onModal}
          title={todoTitle}
          onChangeTitle={this.changeTodoTitle}
          createTodo={this.createTodo}
          today={today}
        />
        <MainCreateTodoMobileView
          title={todoTitle}
          onChangeTitle={this.changeTodoTitle}
          onCreateTodoModal={this.onModal}
          onEnterCreateTodoModal={this.onEnterModal}
        />
      </div>
    );
  }
}

export default MainTodoCreateMobileContainer;
