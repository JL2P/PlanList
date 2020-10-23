import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const iconStyle = {
  width: "28px",
  height: "28px",
  marginLeft: "1.5em",
  marginBottom: "0.5em",
};

const HeaderIconsView = () => {
  return (
    <Container>
      <Menu.Item position="left">
        <Link to="/">
          <img
            src="/images/logo/logo.png"
            style={{
              height: "3.5em",
              width: "8em",
              marginRight: "3px",
            }}
            alt="logo"
          />
        </Link>
      </Menu.Item>
      <Menu.Item position="right">
        <Link to={"/search/"}>
          <img
            src="/images/button/loupe_white.png"
            style={iconStyle}
            alt="loupe_white"
          />
        </Link>
        <img
          src="/images/button/messenger_white.png"
          style={iconStyle}
          alt="messenger_white"
        />
        <img
          src="/images/button/heart_white.png"
          style={iconStyle}
          alt="heart_white"
        />
        <Link to={"/groupmenu/"}>
          <img
            src="/images/button/ufo_white.png"
            style={iconStyle}
            alt="ufo_white"
          />
        </Link>
        <Link to={"/account/"}>
          <img
            src="/images/button/user_white.png"
            style={iconStyle}
            alt="user_white"
          />
        </Link>
      </Menu.Item>
    </Container>
  );
};

export default HeaderIconsView;
