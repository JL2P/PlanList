import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import MainFormDesktopView from "../View/MainFormDesktopView";
import MainFormMobileView from "../View/MainFormMobileView";

class MainFormContainer extends Component {
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
        <MainFormDesktopView Media={Media} />
        <MainFormMobileView Media={Media} />
      </MediaContextProvider>
    );
  }
}

export default MainFormContainer;
