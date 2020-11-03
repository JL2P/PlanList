import React, { useState } from "react";
import { Menu, Visibility } from "semantic-ui-react";
import HeaderIconsView from "./HeaderIconsView";
import { Link } from "react-router-dom";

const menuFixed = { background: "rgb(27, 28, 29)" };

const HeaderDesktopView = ({ Media, loginAccount, loginCheck }) => {
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
        <Menu
          fixed={fixed ? "top" : undefined}
          inverted
          pointing
          secondary
          borderless
          style={menuFixed ? menuFixed : menuFixed}
          size="tiny"
        >
          <HeaderIconsView />
          {loginCheck && (
            <h2 style={{ color: "white" }}>{loginAccount.accountId}</h2>
          )}
          {!loginCheck && (
            <Link to="/signin">
              <h1>로그인하기</h1>
            </Link>
          )}
        </Menu>
      </Visibility>
    </Media>
  );
};

export default HeaderDesktopView;
