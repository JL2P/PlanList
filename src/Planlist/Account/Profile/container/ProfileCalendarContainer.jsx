import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileCalendarView from "../view/CalendarItem/ProfileCalendarView";

@inject("Store")
@observer
class ProfileCalendarContainer extends Component {
  selectedTodo = (todoModel) => {
    const { todo } = this.props.Store;
    todo.setTodo(todoModel);
    todo.setComments(todoModel.comments);
  };

  render() {
    const { selectUser, todos } = this.props;

    return (
      <div>
        <ProfileCalendarView
          selectUser={selectUser}
          todos={todos}
          selectedTodo={this.selectedTodo}
        />
      </div>
    );
  }
}

export default ProfileCalendarContainer;
