import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import MainFormDesktopView from "../View/MainFormDesktopView";
import MainFormMobileView from "../View/MainFormMobileView";

class MainFormContainer extends Component {
  onSaveTodo = (e, todoObj) => {
    console.log("저장되었습니다.");
    // const { todo } = this.props.Store;
    //todo추가 실행
    // todo.saveTodo(todoObj);
  };

  render() {
    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
      },
    });

    return (
      <MediaContextProvider>
        <MainFormDesktopView Media={Media} onSaveTodo={this.onSaveTodo} />
        <MainFormMobileView Media={Media} onSaveTodo={this.onSaveTodo} />
      </MediaContextProvider>
    );
  }
}

export default MainFormContainer;
