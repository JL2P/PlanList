import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  componentDidMount = () => {
    const { follow } = this.props.Store;
    const { selectUser } = this.props;
    follow.getApiFollowers(selectUser.accountId);
    follow.getApiFollowings(selectUser.accountId);

    //
    follow.followingPageCheck(selectUser.accountId);
  };

  onSetAccountProp = (key, value) => {
    const { account } = this.props.Store;
    account.setAccountProp(key, value);
  };

  onModifyUser = (user) => {
    const { account } = this.props.Store;
    account.userModify(user)
  };

  onDeleteUser = (accountId) => {
    const { account } = this.props.Store;
    account.userRemove(accountId);
  };

  onSignout = () => {
    const { account } = this.props.Store;
    account.signout();
  };

  onFollow = (followId) => {
    alert(followId);
    const { follow } = this.props.Store;
    follow.follow(followId);
    window.location.reload();
  };

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    const { account, todo, follow } = this.props.Store;
    const { selectUser, loginAccount, selectUserTodos,} = this.props;
    const {gallery_filePath , getAccount} = account;

    const openAt = selectUser.openAt;
    const today = todo.getToday;
    // 해야 할 일 개수 count
    const count = selectUserTodos.filter((item) => item.endTime >= today)
      .length;
    const isFollowed = follow.getIsFollowed;
    const isFollowing = follow.getIsFollowing;
    const followers = follow.getMyFollowers;
    const followings = follow.getMyFollowings;
    const isFollowingPage = follow.getIsFollowingPage;

    return (
      <div>
        <ProfileManageView
          selectUser={selectUser}
          loginAccount={loginAccount}
          onModifyUser={this.onModifyUser}
          onDeleteUser={this.onDeleteUser}
          onSignout={this.onSignout}
          onSetAccountProp={this.onSetAccountProp}
          loginCheck={account.getLogCheck}
          todo_count={count}
          selectUserTodos={selectUserTodos}
          onFollow={this.onFollow}
          isFollowed={isFollowed}
          isFollowing={isFollowing}
          followers={followers}
          followings={followings}
          openAt={openAt}
          isFollowingPage={isFollowingPage}
          gallery_filePath={gallery_filePath}
          account={getAccount}
        />
      </div>
    );
  }
}

export default ProfileMangeContainer;
