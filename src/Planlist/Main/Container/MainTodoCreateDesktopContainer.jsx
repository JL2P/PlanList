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
  createTodo = (e, todoObj) => {
    e.preventDefault(); // 기본적인 서브밋 행동을 취소
    const { todo } = this.props.Store;

    //기간조건이 정상적으로 선택 된 경우
    if (todoObj.todoKind !== "NONE" && todoObj.todoSubKind !== "NONE") {
      //기간별 Todo 생성
      todo.saveTodoByPeriod(todoObj);
    } else {
      //기본 todo 생성
      todo.saveTodo(todoObj);
    }

    //입력 모달창 닫기
    this.onModal(false);
  };

  render() {
    const { open, todoTitle } = this.state;
    const today = this.props.Store.todo.getToday;

    return (
      <div style={{ background: "#1b1c1d" }}>
        <TodoCreateDesktopForm
          open={open}
          onModal={this.onModal}
          title={todoTitle}
          onChangeTitle={this.changeTodoTitle}
          createTodo={this.createTodo}
          today={today}
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
