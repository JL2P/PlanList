import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import HeaderDesktopView from "../view/HeaderDesktopView";
import HeaderMobileView from "../view/HeaderMobileView";
import { inject, observer } from "mobx-react";
import HeaderFollowerRequestView from "../view/HeaderFollowerRequestView";

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
      }
    }
    const { account } = this.props.Store;
    account.selectAll();

    const { group } = this.props.Store;
    group.getApiGroups();

    const { follow } = this.props.Store;
    follow.getApiNotConfirmFollowers();
  }


  onFollowConfirm = (followId) => {
    alert('팔로잉요청 수락되었습니다.');
    const { follow } = this.props.Store;
    follow.followConfirm(followId);
    window.location.reload();
  };

  onFollowRefuse = (followId) => {
    alert('팔로잉요청 거절되었습니다.');
    const { follow } = this.props.Store;
    follow.followRefuse(followId);
    window.location.reload();
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
    const accounts = account.getAccounts;
    const selectUser = account.selectUser;

    const { follow } = this.props.Store;
    const {getNotConfirmFollowers} = follow

    const element = getNotConfirmFollowers.map((notConfirmFollower) => {

      return(
        <HeaderFollowerRequestView key={notConfirmFollower.accountId} 
        selectUser={selectUser}
        follower={notConfirmFollower}
        onFollowConfirm={this.onFollowConfirm}
        onFollowRefuse={this.onFollowRefuse}/>
      )
    });
    console.log(getNotConfirmFollowers)

    return (
      <MediaContextProvider>
        <HeaderDesktopView
          Media={Media}
          loginAccount={loginAccount}
          loginCheck={loginCheck}
          accounts={accounts}
          notConfirmFollowers={getNotConfirmFollowers}
          element={element}
        />
        <HeaderMobileView Media={Media} />
      </MediaContextProvider>
    );
  }
}

export default HeaderMainContainer;
