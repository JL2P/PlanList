import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  
  componentDidMount() {
    console.log("componentDidMount")
    const { account } = this.props.Store;
    account.selectUser("song");
    console.log(account.account)
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    // const account = data[0];
    console.log("render");
    const { account } = this.props.Store;
    console.log(account.account)

    return <ProfileManageView account={account.accountDetail}  />;
  }
}

export default ProfileMangeContainer;
