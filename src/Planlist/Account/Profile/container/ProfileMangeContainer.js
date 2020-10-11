import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  
  componentDidMount() {
    console.log("componentDidMount")
    const { accountStore } = this.props.Store;
    accountStore.selectUser("song");
    console.log(accountStore.account)
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    // const account = data[0];
    console.log("render");
    const { accountStore } = this.props.Store;
    console.log(accountStore.accountDetail)
    console.log(accountStore.account)

    return <ProfileManageView account={accountStore.accountDetail}  />;
  }
}

export default ProfileMangeContainer;
