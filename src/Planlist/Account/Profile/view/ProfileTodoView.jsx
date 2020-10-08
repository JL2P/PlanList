import React, { Component } from "react";
import { Menu, Segment, Image, Container } from "semantic-ui-react";

class ProfileTodoView extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container style={{ width: "900px" }}>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
        </Menu>

        <div>
          {activeItem === "home" && <h1>WELLCOME!</h1>}
          {activeItem === "messages" && (
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          )}
          {activeItem === "friends" && <h1>HELLO!</h1>}
        </div>
      </Container>
    );
  }
}

export default ProfileTodoView;
