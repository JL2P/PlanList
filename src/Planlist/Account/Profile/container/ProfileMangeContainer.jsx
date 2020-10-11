import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";


@inject("Store")
@observer
class ProfileMangeContainer extends Component {

  //componentDidMount 추가
  componentDidMount() {
    const { account } = this.props.Store;
    account.selectUser("song");
  }


  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    // const account = data[0];
    const { account } = this.props.Store;
    console.log("####",account);
    console.log(">>>>",account.accountId);

    return <ProfileManageView account={account} />;
  }
}

export default ProfileMangeContainer;
