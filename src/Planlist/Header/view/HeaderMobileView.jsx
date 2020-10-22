import React from "react";
import { Menu, Segment, Sidebar } from "semantic-ui-react";
import HeaderIconsView from "./HeaderIconsView";

const HeaderMobileView = ({ Media }) => {
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Segment inverted textAlign="center" vertical>
        <Menu inverted secondary size="tiny">
          <HeaderIconsView />
        </Menu>
      </Segment>
    </Media>
  );
};

export default HeaderMobileView;
