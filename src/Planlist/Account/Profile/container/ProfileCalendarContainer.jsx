import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileCalendarView from "../view/CalendarItem/ProfileCalendarView";

@inject("Store")
@observer
class ProfileCalendarContainer extends Component {
  render() {
    const { selectUser, todos } = this.props;

    return (
      <div>
        <ProfileCalendarView selectUser={selectUser} todos={todos} />
      </div>
    );
  }
}

export default ProfileCalendarContainer;
