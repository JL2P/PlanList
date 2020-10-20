import React, { useState } from "react";
import { Menu, Visibility } from "semantic-ui-react";
import HeaderIconsView from "./HeaderIconsView";

const menuFixed = { background: "rgb(27, 28, 29)" };

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
        </Menu>
      </Visibility>
    </Media>
  );
};

export default HeaderDesktopView;
