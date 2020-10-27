import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { account } = this.props.Store;
    account.selectUser("song");
  }

  onModifyAccount = () => {
    const { account } = this.props.Store;
    account.userModify(account);
  };

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    // Store에서 account Store가져오기
    console.log("render");
    const { account, todo } = this.props.Store;
    const todos = todo.getTodos2;
    console.log("??", account);

    const today_date = new Date(); // 현재 날짜 받아오기
    const year = today_date.getFullYear();
    const month = today_date.getMonth() + 1; // 1월:0
    const date = today_date.getDate(); // 날짜
    const today = year + "-" + month + "-" + date;
    const count = todos.filter((item) => item.end_time >= today).length;

    // console.log(account.accountDetail);
    return (
      <div>
        <ProfileManageView
          account={account.getAccount2}
          onModifyAccount={this.onModifyAccount}
          todo_count = {count}
        />
      </div>
    );
  }
}

export default ProfileMangeContainer;
