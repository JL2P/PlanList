import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfilePrivateAccountTodoView from "../view/ProfilePrivateAccountTodoView";
import ProfileTodoView from "../view/ProfileTodoView";

@inject("Store")
@observer
class ProfileTodoContainer extends Component {
  componentDidMount() {
    const { account, follow, point } = this.props.Store;
    const { selectUser } = this.props;
    console.log("유저!!", selectUser.accountId);
    follow.getApiNotConfirmFollowers();
    follow.followingPageCheck(selectUser.accountId);

    // const loginId = account.getLoginAccount.accountId;
    // point.allPoints(loginId);
  }

  // todo 완료를 누르면 점수 부여
  onAddPoint = (pointObj) => {
    const { point } = this.props.Store;
    point.addPoint(pointObj);
  };

  // todo 완료를 취소하면 점수 회수
  onDeletePoint = (pointObj) => {
    const { point } = this.props.Store;
    point.deletePoint(pointObj);
  };

  onFollow = (followId) => {
    const { follow } = this.props.Store;
    follow.follow(followId);
    window.location.reload();
  };

  selectedTodo = (todoModel) => {
    const { todo } = this.props.Store;
    todo.setTodo(todoModel);
    todo.setComments(todoModel.comments);
  };

  onLikeButton = (todoId, action) => {
    const { todo } = this.props.Store;
    if (action === "ADD") {
      todo.addLike(todoId);
    } else {
      todo.removeLike(todoId);
    }
  };

  onDeleteMyFollowing = (followId) => {
    alert("삭제되었습니다");
    const { follow } = this.props.Store;
    follow.deleteMyFollowing(followId);
  };

  onComplete = (todoId) => {
    const { todo } = this.props.Store;
    todo.todoCompleted(todoId);
  };

  onIncomplete = (todoId) => {
    const { todo } = this.props.Store;
    todo.todoIncompleted(todoId);
  };

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { account, follow } = this.props.Store;
    const { selectUser, selectUserTodos } = this.props;
    const openAt = selectUser.openAt;
    const loginCheck = account.getLogCheck;
    const loginAccount = account.getLoginAccount;
    const notConfirmFollowers = follow.getNotConfirmFollowers;
    const isFollowingPage = follow.getIsFollowingPage;

    return (
      <div>
        {openAt === "Y" || // 공개 계정이거나
        // follow.getIsFollowed === true || // 팔로잉 계정이거나
        isFollowingPage === true || // 팔로잉 계정이거나
        (loginCheck === true && // 로그인한 사용자 본인의 페이지인 경우,
          loginAccount.accountId === selectUser.accountId) ? (
          // todo 페이지를 보여줌
          <ProfileTodoView
            selectUser={selectUser}
            loginAccount={loginAccount}
            selectUserTodos={selectUserTodos}
            selectedTodo={this.selectedTodo}
            onLikeButton={this.onLikeButton}
            onComplete={this.onComplete}
            onIncomplete={this.onIncomplete}
            onAddPoint={this.onAddPoint}
            onDeletePoint={this.onDeletePoint}
          />
        ) : (
          // 비공개된 계정의 다른 사용자의 페이지인 경우, 비공개 화면을 보여줌
          <ProfilePrivateAccountTodoView
            accountId={account.getAccount.accountId}
            selectUser={selectUser}
            onFollow={this.onFollow}
            isFollowed={follow.getIsFollowed}
            onDeleteMyFollowing={this.onDeleteMyFollowing}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoContainer;
