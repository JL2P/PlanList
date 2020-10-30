import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { account, todo } = this.props.Store;
    //여기서 랜덤으로 뽑아서 사용해보는방법?
    // const userList = ["giant_peng","giant_pen2","giant_peng3"];

    account.selectUser("giant_peng");
    account.selectAll();
    todo.getApiTodos();
  }

  //로그인이 됬을때 디비에서 id에맞는 유저정보를 가지고 오기위함
  // onSelectUser = (user) => {
  //   const { account } = this.props.Store;
  //   account.selectUser(user);
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
    account.userRemove(accountId);
  };

  onSignout = () => {
    const { account } = this.props.Store;
    account.signout();
  };

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    console.log("render");
    const { account, todo } = this.props.Store;
    const todos = todo.getTodos;
    const today = todo.getToday;
    console.log(">>", account.getAccount);
    console.log("오늘 날짜 : ", today);
    // console.log(todos[0].end_time);
    console.log(account.getLogCheck === false);
    console.log(account.getLoginId);

    // 해야 할 일 개수 count
    const count = todos.filter((item) => item.endTime >= today).length;

    return (
      <div>
        <ProfileManageView
          account={account.getAccount}
          // onSelectUser={this.onSelectUser}
          onModifyUser={this.onModifyUser}
          onDeleteUser={this.onDeleteUser}
          onSignout={this.onSignout}
          onSetAccountProp={this.onSetAccountProp}
          // loginId={account.getLoginId}
          loginCheck={account.getLogCheck}
          todo_count={count}
        />
      </div>
    );
  }
}

export default ProfileMangeContainer;
