import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfilePrivateAccountTodoView from "../view/ProfilePrivateAccountTodoView";
import ProfileTodoView from "../view/ProfileTodoView";

@inject("Store")
@observer
class ProfileTodoContainer extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { account } = this.props.Store;
    const openAt = account.getAccount.openAt;
    const loginCheck = account.getLogCheck;
    const loginAccount = account.getLoginAccount;

    return (
      <div>
        {openAt === "Y" ||
        (loginCheck === true &&
          loginAccount.accountId === account.getAccount.accountId) ? (
          <ProfileTodoView handleItemClick={this.handleItemClick} />
        ) : (
          <ProfilePrivateAccountTodoView />
        )}
      </div>
    );
  }
}

export default ProfileTodoContainer;
