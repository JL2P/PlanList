import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";

const HeaderDesktopView = ({ Media }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 80, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    </Media>
  );
};

export default HeaderDesktopView;
