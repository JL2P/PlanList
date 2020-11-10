import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import HeaderDesktopView from "../view/HeaderDesktopView";
import HeaderMobileView from "../view/HeaderMobileView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class HeaderMainContainer extends Component {
  componentDidMount() {
    //헤더를 호출할 경우 로그인 상태일 경우 회원정보를 가져온다.
    if (localStorage.getItem("jwt_token")) {
      const { account } = this.props.Store;
      account.getApiAccountInfo().then(() => {

        //헤더를 호출할 경우 groupDetail과 해당 member 정보를 가져온다.
        if(localStorage.getItem('groupId')){
          const { group } = this.props.Store;
          console.log("컨트롤러")
          group.groupDetail_page(localStorage.getItem('groupId'),account.loginAccount.accountId);
        }
      })
    }
      
    
  }

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
