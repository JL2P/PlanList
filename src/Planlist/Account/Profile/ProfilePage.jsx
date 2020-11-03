import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";

@inject("Store")
@observer
class ProfilePage extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { account, todo } = this.props.Store;
    const id = this.props.match.params.id;

    console.log("아이디야 나와랏!", id === undefined);

    if (id === undefined) {
      account.selectUser(account.getLoginAccount.accountId);
    } else {
      account.selectUser(id);
    }

    account.selectAll();
    todo.getApiTodos();
  }

  render() {
    return (
      <div>
        <ProfileMangeContainer />
        <ProfileTodoContainer />
      </div>
    );
  }
}

export default ProfilePage;
