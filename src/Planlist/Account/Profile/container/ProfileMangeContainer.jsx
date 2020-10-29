import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { account, todo } = this.props.Store;
    // account.selectUser("giant_peng");
    account.selectAll();
    todo.getApiTodos();
  }

  onSelectUser = (user) => {
    const { account } = this.props.Store;
    account.selectUser(user);
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
    // console.log(account.getLogCheck == false);
    console.log(account.getLoginId);
    const count = todos.filter((item) => item.endTime >= today).length;

    return (
      <div>
        <ProfileManageView
          account={account.getAccount}
          onSelectUser={this.onSelectUser}
          loginId={account.getLoginId}
          loginCheck={account.getLogCheck}
          todo_count={count}
        />
      </div>
    );
  }
}

export default ProfileMangeContainer;
