import React, { useState } from "react";
import { Menu, Visibility } from "semantic-ui-react";
import HeaderIconsView from "./HeaderIconsView";

const menuFixed = { background: "rgb(27, 28, 29)" };

const HeaderDesktopView = ({
  loginAccount,
  loginCheck,
  accounts,
  notConfirmFollowers,
  element,
}) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
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
        <HeaderIconsView
          accounts={accounts}
          loginAccount={loginAccount}
          notConfirmFollowers={notConfirmFollowers}
          element={element}
        />
        {loginCheck && (
          <h2 style={{ color: "white" }}>{loginAccount.accountId}</h2>
        )}
      </Menu>
    </Visibility>
  );
};

export default HeaderDesktopView;
