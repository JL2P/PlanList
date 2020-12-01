import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Header, Item } from "semantic-ui-react";
import ProfileFollowingView from "../view/ProfileManageFollowing/ProfileFollowingView";

@inject("Store")
@observer
class ProfileFollowingListContainer extends Component {
  componentDidMount() {
    const { account } = this.props.Store;
    account.getApiAccountInfo();
  }

  onDeleteMyFollowing = (followId) => {
    const { follow } = this.props.Store;
    follow.deleteMyFollowing(followId).then((res) => {
      alert("팔로우 요청이 취소되었습니다.");
      window.location.reload();
    });
  };

  onFollow = (followId) => {
    alert("팔로우 요청되었습니다.");
    const { follow } = this.props.Store;
    follow.follow(followId);
    window.location.reload();
  };

  render() {
    const { follow, account } = this.props.Store;
    const loginId = account.getLoginAccount.accountId;
    const myFollowings = follow.getMyFollowings;
    const element = myFollowings.map((following) => (
      <ProfileFollowingView
        key={following.accountId}
        following={following}
        onDeleteMyFollowing={this.onDeleteMyFollowing}
        loginId={loginId}
        isFollowing={follow.getIsFollowing}
        onFollow={this.onFollow}
      />
    ));

    return (
      <div style={{ height: "600px", textAlign: "center" }}>
        <div>
          <Item.Group>{element}</Item.Group>
        </div>
      </div>
    );
  }
}

export default ProfileFollowingListContainer;
