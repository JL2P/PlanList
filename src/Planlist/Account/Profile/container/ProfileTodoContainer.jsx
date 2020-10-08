import React, { Component } from "react";
import ProfileTodoView from "../view/ProfileTodoView";

class ProfileTodoContainer extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    //기능들구현해서 prop로 넘겨주는 작업

    return <ProfileTodoView handleItemClick={this.handleItemClick} />;
  }
}

export default ProfileTodoContainer;
