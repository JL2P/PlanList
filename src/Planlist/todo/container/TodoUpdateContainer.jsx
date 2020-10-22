import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import TodoUpdateDesktopForm from "../view/TodoUpdateDesktopForm";
import TodoUpdateMobileForm from "../view/TodoUpdateMobileForm";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class TodoUpdateContainer extends Component {
  updateTodo = (e) => {
    console.log("updateTodo");
  };

  render() {
    const { todo, open, onModal } = this.props;

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
          />
        </Media>
        <Media at="mobile">
          <TodoUpdateMobileForm
            todo={todo}
            open={open}
            onModal={onModal}
            updateTodo={this.updateTodo}
          />
        </Media>
      </MediaContextProvider>
    );
  }
}

export default TodoUpdateContainer;
