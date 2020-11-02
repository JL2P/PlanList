import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import HeaderDesktopView from "../view/HeaderDesktopView";
import HeaderMobileView from "../view/HeaderMobileView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class HeaderMainContainer extends Component {
  render() {
    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
      },
    });

    const { account } = this.props.Store;
    const loginAccount = account.getLoginAccount;
    const loginCheck = account.getLogCheck;
    return (
      <MediaContextProvider>
        <HeaderDesktopView
          Media={Media}
          loginAccount={loginAccount}
          loginCheck={loginCheck}
        />
        <HeaderMobileView Media={Media} />
      </MediaContextProvider>
    );
  }
}

export default HeaderMainContainer;
