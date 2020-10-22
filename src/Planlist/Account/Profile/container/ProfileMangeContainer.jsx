import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";
import data from "../../../Sample/Data/MainPage_List_Data";
@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { account } = this.props.Store;
    account.selectUser("song");
  }

  onModifyAccount = () => {
    const { account } = this.props.Store;
    account.userModify(account);
  };
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    console.log("render");
    const { account } = this.props.Store;
    console.log("??", account);
    console.log("유저", account.getAccount2.name);

    // console.log(account.accountDetail);
    return (
      <div>
        {/* <ProfileManageView account={account.getAccount} /> */}
        <ProfileManageView account={account.getAccount2} />
      </div>
    );
  }
}

export default ProfileMangeContainer;
