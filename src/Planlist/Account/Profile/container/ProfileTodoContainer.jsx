import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfilePrivateAccountTodoView from "../view/ProfilePrivateAccountTodoView";
import ProfileTodoView from "../view/ProfileTodoView";

@inject("Store")
@observer
class ProfileTodoContainer extends Component {

  componentDidMount(){
    const {follow} = this.props.Store;
    follow.getApiNotConfirmFollowers();

  }

  onFollow = (followId) => {
    const { follow } = this.props.Store;
    follow.follow(followId);
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
} 

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { account, follow } = this.props.Store;
    const { selectUser, selectUserTodos } = this.props;
    const openAt = selectUser.openAt;
    const loginCheck = account.getLogCheck;
    const loginAccount = account.getLoginAccount;
    const notConfirmFollowers = follow.getNotConfirmFollowers;

    return (
      <div>
        {openAt === "Y" || // 공개 계정이거나
        follow.getIsFollowed === true || // 팔로잉 계정이거나
        (loginCheck === true && // 로그인한 사용자 본인의 페이지인 경우,
          loginAccount.accountId === selectUser.accountId) ? (
          // todo 페이지를 보여줌
          <ProfileTodoView
            selectUser={selectUser}
            loginAccount={loginAccount}
            selectUserTodos={selectUserTodos}
            selectedTodo={this.selectedTodo}
            onLikeButton={this.onLikeButton}
            
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
