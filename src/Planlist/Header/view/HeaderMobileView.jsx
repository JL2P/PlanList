import React from "react";
import {
  Container,
  Menu,
  Segment,
  Sidebar,
  Icon,
  Image,
} from "semantic-ui-react";

const HeaderMobileView = ({ Media }) => {
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 80, padding: "1em 0em" }}
        vertical
      >
        <Container>
          <Menu inverted secondary size="large">
            <Menu.Item position="left">
              <Image
                src="/images/logo/logo.png"
                size="small"
                style={{ marginTop: "0.5em" }}
              />
            </Menu.Item>
            <Menu.Item position="right">
              <Icon name="home" size="large" />
              <Icon name="mail" size="large" />
              <Icon name="user" size="large" />
            </Menu.Item>
          </Menu>
        </Container>
      </Segment>
    </Media>
  );
};

export default HeaderMobileView;
