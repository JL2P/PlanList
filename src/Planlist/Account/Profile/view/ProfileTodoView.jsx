import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import MainListContainer from "../../../Main/Container/MainListContainer";
import ProfileTodoListContainer from "../container/ProfileTodoListContainer";

class ProfileTodoView extends Component {
  state = { activeItem: "From Now" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <Menu pointing secondary>
          <Menu.Item
            name="From Now"
            active={activeItem === "From Now"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Past"
            active={activeItem === "Past"}
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
          {activeItem === "From Now" && <ProfileTodoListContainer />}
          {activeItem === "Past" && <MainListContainer />}
          {activeItem === "Not yet" && <h1>해야 할 할일 모두 나와라!</h1>}
          {activeItem === "Completed" && <h1>달성한 할일 모두 나와라!</h1>}
        </div>
      </Container>
    );
  }
}

export default ProfileTodoView;
