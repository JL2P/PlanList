import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Header, Item } from "semantic-ui-react";
import ProfileFollowingView from "../view/ProfileManageFollowing/ProfileFollowingView";

@inject("Store")
@observer
class ProfileFollowingListContainer extends Component {
  onDeleteMyFollowing = (followId) => {
    const { follow } = this.props.Store;
    follow.deleteMyFollowing(followId).then((res) => {
      alert("팔로우 요청이 취소되었습니다.");
      window.location.reload();
    });
  };

  render() {
    const { follow } = this.props.Store;
    const myFollowings = follow.getMyFollowings;
    const element = myFollowings.map((following) => (
      <ProfileFollowingView
        key={following.accountId}
        following={following}
        onDeleteMyFollowing={this.onDeleteMyFollowing}
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
