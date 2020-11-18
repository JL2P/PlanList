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
        if (localStorage.getItem("groupId")) {
          const { group } = this.props.Store;
          group.groupDetail_page(
            localStorage.getItem("groupId"),
            account.loginAccount.accountId
          );
        }
      });
      if (localStorage.getItem("myGroups")) {
        const { group } = this.props.Store;
        var myGroup_object = localStorage.getItem("myGroups");
        //오브젝트를 사용하는 방법
        group.myGroups_array(JSON.parse(myGroup_object));
      }
      //디테일 내비게이션 저장
      if (localStorage.getItem("name")) {
        const { group } = this.props.Store;
        group.handleItemClick(localStorage.getItem("name"));
      }
      //카테고리 네비게이션 저장
      if (localStorage.getItem("select_Group_categoryList")) {
        const { group } = this.props.Store;
        var selectCategory = localStorage.getItem("select_Group_categoryList")
        group.categoryList_select(JSON.parse(selectCategory));
        console.log("헤더")
      }
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
