import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   const { account, todo } = this.props.Store;
  //   const { id } = this.props;
  //   account.selectUser(id);
  //   account.selectAll();
  //   todo.getApiTodos();
  // }

  // 로그인이 됬을때 디비에서 id에맞는 유저정보를 가지고 오기위함
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

  // onModifyUser = (e,accountModel) => {
  //   const { account } = this.props.Store;
  //   account.userModify(accountModel);
  // };

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
    const { account, todo } = this.props.Store;
    const todos = todo.getTodos;
    const today = todo.getToday;
    const selectId = account.getAccount.accountId;
    // 해야 할 일 개수 count
    const count = todos.filter(
      (item) => item.writer === selectId && item.endTime >= today
    ).length;
    const loginCheck = account.getLogCheck;
    return (
      <div>
        <p>
          {account.getAccounts.map((item) => (
            <Link to={`/account/${item.accountId}`}>
              {item.accountId}&nbsp;
            </Link>
          ))}
        </p>
        <ProfileManageView
          account={account.getAccount}
          accountStore={account}
          // onSelectUser={this.onSelectUser}
          onModifyUser={this.onModifyUser}
          onDeleteUser={this.onDeleteUser}
          onSignout={this.onSignout}
          onSetAccountProp={this.onSetAccountProp}
          // loginId={account.getLoginId}
          loginCheck={account.getLogCheck}
          todo_count={count}
        />
        <hr />
        <p>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🔻&emsp;로그인한
          유저
        </p>
        <ProfileManageView
          account={loginCheck ? account.getLoginAccount : account.getAccount}
          accountStore={account}
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
