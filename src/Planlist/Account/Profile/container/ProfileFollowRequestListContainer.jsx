import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Header, Item } from "semantic-ui-react";
import ProfileFollowerRequestView from "../view/ProfileFollowerRequestView";

@inject("Store")
@observer
class ProfileFollowRequestListContainer extends Component {
  // componentDidMount = () => {
  //   const { follow } = this.props.Store;
  //   const { selectUser } = this.props;
  // };
  onSetAccountProp = (key, value) => {
    const { account } = this.props.Store;
    account.setAccountProp(key, value);
  };

  onModifyUser = (user) => {
    const { account } = this.props.Store;
    account.userModify(user);
  };

  onDeleteUser = (accountId) => {
    const { account } = this.props.Store;
    account.userRemove(accountId).then((res) => {
      alert("회원탈퇴 되었습니다.");
      window.location.href = "/signin";
    });
  };

  onSignout = () => {
    const { account } = this.props.Store;
    account.signout();
    alert("로그아웃 되었습니다.");
    window.location.href = "/signin";
  };

  onFollowConfirm = (followId) => {
    alert("팔로잉요청 수락되었습니다.");
    const { follow } = this.props.Store;
    follow.followConfirm(followId);
    window.location.reload();
  };

  onFollowRefuse = (followId) => {
    alert("팔로잉요청 거절되었습니다.");
    const { follow } = this.props.Store;
    follow.followRefuse(followId);
    window.location.reload();
  };
  render() {
    const { follow } = this.props.Store;
    const { selectUser } = this.props;
    const notConfirmFollowers = follow.getNotConfirmFollowers;

    const element = notConfirmFollowers.map((notConfirmFollower) => (
      <ProfileFollowerRequestView
        key={notConfirmFollower.accountId}
        selectUser={selectUser}
        follower={notConfirmFollower}
        onFollowConfirm={this.onFollowConfirm}
        onFollowRefuse={this.onFollowRefuse}
      />
    ));

    return (
      <div style={{ height: "600px", textAlign: "center" }}>
        <Header as="h3" dividing style={{ paddingBottom: "0.5em" }}>
          팔로우 요청
        </Header>
        <div>
          <Item.Group>{element}</Item.Group>
        </div>
      </div>
    );
  }
}

export default ProfileFollowRequestListContainer;
