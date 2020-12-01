import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfilePrivateAccountTodoView from "../view/ProfilePrivateAccountTodoView";
import ProfileTodoView from "../view/ProfileTodoView";

@inject("Store")
@observer
class ProfileTodoContainer extends Component {
  componentDidMount() {
    const { account, follow } = this.props.Store;
    const { selectUser } = this.props;

    account.getApiAccountInfo();

    follow.getApiNotConfirmFollowers();
    follow.followingPageCheck(selectUser.accountId);
  }

  // todo 완료를 누르면 점수 부여
  onAddPoint = (pointObj) => {
    const {point, groupPoint} = this.props.Store;
    console.log(pointObj);
    const isGroupTodo = pointObj.groupAt;

    if(isGroupTodo ==="Y"){
      // GroupPoint
      console.log("GROUP")
      groupPoint.addGroupPoint(pointObj);
    }
    else{
      console.log("NOMAL")
      // nomal Point
      point.addPoint(pointObj);
    }

    //const { point } = this.props.Store;
    //point.addPoint(pointObj);
  };

  // todo 완료를 취소하면 점수 회수
  onDeletePoint = (accountId, todoId) => {
    const { point } = this.props.Store;
    point.deletePoint(accountId, todoId);
  };

  // group todo 완료를 누르면 점수 부여
  onAddGroupPoint = (groupPointObj) => {
    const { groupPoint } = this.props.Store;
    groupPoint.addGroupPoint(groupPointObj);
  };

  // group todo 완료를 취소하면 그룹 점수 회수
  onDeleteGroupPoint = (accountId, groupId, todoId) => {
    const { groupPoint } = this.props.Store;
    groupPoint.deleteGroupPoint(accountId, groupId, todoId);
  };

  onFollow = (followId) => {
    const { follow } = this.props.Store;
    follow.follow(followId);
    alert("팔로우 요청되었습니다.");
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
    const { follow } = this.props.Store;
    follow.deleteMyFollowing(followId).then((res) => {
      alert("팔로우 요청이 취소되었습니다.");
      window.location.reload();
    });
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
    const { account, follow, point, groupPoint, todo } = this.props.Store;
    const { selectUser, selectUserTodos } = this.props;
    const { getAccount } = account;
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
            onAddGroupPoint={this.onAddGroupPoint}
            onDeleteGroupPoint={this.onDeleteGroupPoint}
            // heat={heat}
            // dailyList={dailyList}
            account={getAccount}
            notConfirmFollowers={notConfirmFollowers}
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
