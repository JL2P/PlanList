import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";


@inject("Store")
@observer
class ProfileMangeContainer extends Component {

  //componentDidMount 추가
  componentDidMount() {
    //스토어에서 account스토어를 가져온다.
    const accountStore  = this.props.Store.account;
    accountStore.selectUser("song");
    // accountStore.selectAll();
  }


  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    // const accountStore  = this.props.Store.account;
    const accountStore  = this.props.Store.account;
    console.log("render");
    console.log(accountStore.getAccount);
    // accountStore.changeTest();

    return <ProfileManageView account={accountStore} />;
  }
}

export default ProfileMangeContainer;
