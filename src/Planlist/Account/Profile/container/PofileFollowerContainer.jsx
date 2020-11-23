import React, { Component } from "react";
import ProfileFollowerView from "../view/ProfileManageFollower/ProfileFollowerView";
import { Button, Modal } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import FollowerCancelModal from "../view/ProfileManageFollower/FollowerCancelModal";

@inject("Store")
@observer
class PofileFollowerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { follower } = this.props;
    const { follow } = this.props.Store;
    follow.followingCheck(follower.accountId);
    follow.followerCheck(follower.accountId);
  }

  onModal = (flag) => {
    this.setState({ open: flag });
  };

  onFollow = (followId) => {
    alert("팔로잉 요청되었습니다.");
    const { follow } = this.props.Store;
    follow.follow(followId);
    window.location.reload();
  };

  onFollowRefuse = (followId) => {
    alert("삭제되었습니다.");
    const { follow } = this.props.Store;
    follow.followRefuse(followId);
    window.location.reload();
  };

  render() {
    const { follower } = this.props;
    const { follow } = this.props.Store;

    const isFollower = follow.getIsFollower;
    const isFollowing = follow.getIsFollowing;
    //follower True Following True
    // 팔로우 취소버튼
    const flag = isFollower && isFollowing ? true : false;
    console.log(isFollower, isFollowing);
    console.log(flag);

    //follower false Following True
    // 팔로우하기 버튼
    const btn =
      flag === true ? (
        <Button
          size="tiny"
          basic
          color="grey"
          onClick={() => {
            this.onModal(true);
          }}
        >
          팔로잉취소
        </Button>
      ) : (
        <Button
          size="tiny"
          basic
          color="grey"
          onClick={() => {
            this.onFollow(follower.accountId);
          }}
        >
          팔로잉
        </Button>
      );

    return (
      <ProfileFollowerView
        follower={follower}
        onFollowRefuse={this.onFollowRefuse}
        onBtn={btn}
      >
        <FollowerCancelModal
          follower={follower}
          open={this.state.open}
          onModal={this.onModal}
          onFollowRefuse={this.onFollowRefuse}
        />
      </ProfileFollowerView>
    );
  }
}

export default PofileFollowerContainer;
