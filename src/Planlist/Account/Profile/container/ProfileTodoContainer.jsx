import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfilePrivateAccountTodoView from "../view/ProfilePrivateAccountTodoView";
import ProfileTodoView from "../view/ProfileTodoView";

@inject("Store")
@observer
class ProfileTodoContainer extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  onFollow = (followId)=>{
    const {follow} = this.props.Store;
    follow.follow(followId);
  }


  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { account, follow} = this.props.Store;
    const { selectUser } = this.props;
    const openAt = selectUser.openAt;
    const loginCheck = account.getLogCheck;
    const loginAccount = account.getLoginAccount;
    return (
      <div>
        {openAt === "Y" ||
        (loginCheck === true && // 공개 계정이거나 로그인한 사용자 본인의 페이지인 경우, todo 페이지를 보여줌
          loginAccount.accountId === selectUser.accountId) ? (
          <ProfileTodoView
            handleItemClick={this.handleItemClick}
            selectUser={selectUser}
          />
        ) : (
          // 비공개된 계정의 다른 사용자의 페이지인 경우, 비공개 화면을 보여줌
          <ProfilePrivateAccountTodoView
            accountId={account.getAccount.accountId}
            selectUser={selectUser}
            onFollow={this.onFollow}
            isFollowed={follow.getIsFollowed}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoContainer;
