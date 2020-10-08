import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import HeaderDesktopView from "../view/HeaderDesktopView";
import HeaderMobileView from "../view/HeaderMobileView";

class HeaderMainContainer extends Component {
  render() {
    const { MediaContextProvider, Media } = createMedia({
      breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
      },
    });

    return (
      <MediaContextProvider>
        <HeaderDesktopView Media={Media} />
        <HeaderMobileView Media={Media} />
      </MediaContextProvider>
    );
  }
}

export default HeaderMainContainer;
