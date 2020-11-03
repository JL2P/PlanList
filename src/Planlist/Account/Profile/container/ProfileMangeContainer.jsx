import React, { Component } from "react";
import ProfileManageView from "../view/ProfileManageView";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

@inject("Store")
@observer
class ProfileMangeContainer extends Component {
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
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🔺&emsp;
            로그인한 유저
          </p>
          <hr />
          <p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;🔻&emsp;
            다른 사용자 페이지
          </p>
        </p>
        <ProfileManageView
          account={account.getAccount}
          accountStore={account}
          onModifyUser={this.onModifyUser}
          onDeleteUser={this.onDeleteUser}
          onSignout={this.onSignout}
          onSetAccountProp={this.onSetAccountProp}
          loginCheck={account.getLogCheck}
          todo_count={count}
        />
      </div>
    );
  }
}

export default ProfileMangeContainer;
