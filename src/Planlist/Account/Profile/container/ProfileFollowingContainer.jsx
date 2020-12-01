import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ProfileFollowingView from "../view/ProfileManageFollowing/ProfileFollowingView";

@inject("Store")
@observer
class ProfileFollowingContainer extends Component {
  componentDidMount() {
    const { following } = this.props;

    const { follow, account } = this.props.Store;
    follow.followingCheck(following.accountId);
    follow.followerCheck(following.accountId);
    account.getApiAccountInfo();
  }
  render() {
    const { following, onDeleteMyFollowing, loginId, onFollow } = this.props;
    const { follow } = this.props.Store;
    const isFollowing = follow.getIsFollowing;

    return (
      <div>
        <ProfileFollowingView
          key={following.accountId}
          following={following}
          isFollowing={isFollowing}
          onDeleteMyFollowing={onDeleteMyFollowing}
          loginId={loginId}
          onFollow={onFollow}
        />
      </div>
    );
  }
}

export default ProfileFollowingContainer;
