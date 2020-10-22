import React from "react";
import { createMedia } from "@artsy/fresnel";
import MainTodoCreateDesktopContainer from "./Container/MainTodoCreateDesktopContainer";
import MainTodoCreateMobileContainer from "./Container/MainTodoCreateMobileContainer";
import MainListContainer from "./Container/MainListContainer";

//rsf hook
const MainPage = () => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });
  return (
    <>
      <MediaContextProvider>
        <Media greaterThan="mobile">
          <MainTodoCreateDesktopContainer />
        </Media>
        <Media at="mobile">
          <MainTodoCreateMobileContainer />
        </Media>
      </MediaContextProvider>
      <MainListContainer />
    </>
  );
};

export default MainPage;
