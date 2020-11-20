import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import TodoUpdateDesktopForm from "../view/TodoUpdateDesktopForm";
import TodoUpdateMobileForm from "../view/TodoUpdateMobileForm";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoUpdateContainer extends Component {
  updateTodo = (e, todoUpdateModel) => {
    e.preventDefault(); // 기본적인 서브밋 행동을 취소
    const { todo } = this.props.Store;
    todo.modifyTodo(todoUpdateModel);
    //업데이트 후 모달 닫기
    this.props.onModal(false);
  };

  render() {
    const { todo, open, onModal } = this.props;
    const today = this.props.Store.todo.getToday;


    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
      },
    });

    return (
      <MediaContextProvider>
        <Media greaterThan="mobile">
          <TodoUpdateDesktopForm
            todo={todo}
            open={open}
            onModal={onModal}
            updateTodo={this.updateTodo}
            today={today}
          />
        </Media>
        <Media at="mobile">
          <TodoUpdateMobileForm
            todo={todo}
            open={open}
            onModal={onModal}
            updateTodo={this.updateTodo}
            today={today}
          />
        </Media>
      </MediaContextProvider>
    );
  }
}

export default TodoUpdateContainer;
