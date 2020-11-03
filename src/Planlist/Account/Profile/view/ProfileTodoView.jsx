import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import ProfileTodoFromNowListContainer from "../container/ProfileTodoFromNowListContainer";
import ProfileTodoPastListContainer from "../container/ProfileTodoPastListContainer";

class ProfileTodoView extends Component {
  state = { activeItem: "해야 할 일" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Menu pointing secondary>
          <Menu.Item
            name="해야 할 일"
            active={activeItem === "해야 할 일"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="지난 할 일"
            active={activeItem === "지난 할 일"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Not yet"
            active={activeItem === "Not yet"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Completed"
            active={activeItem === "Completed"}
            onClick={this.handleItemClick}
          />
        </Menu>

        <div>
          {activeItem === "해야 할 일" && <ProfileTodoFromNowListContainer />}
          {activeItem === "지난 할 일" && <ProfileTodoPastListContainer />}
          {activeItem === "Not yet" && <h1>해야 할 할일 모두 나와라!</h1>}
          {activeItem === "Completed" && <h1>달성한 할일 모두 나와라!</h1>}
        </div>
      </Container>
    );
  }
}

export default ProfileTodoView;
