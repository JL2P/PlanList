import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";
import ProfileNonMemberView from "./view/ProfileNonMemberView";

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
    const { account } = this.props.Store;
    const loginCheck = account.getLogCheck;
    const id = this.props.match.params.id;

    return (
      <div>
        <h3>
          {account.getAccounts.map((item) => (
            <Link to={`/account/${item.accountId}`}>
              {item.accountId}&ensp;
            </Link>
          ))}
        </h3>
        {!loginCheck && id === undefined ? (
          <ProfileNonMemberView />
        ) : (
          <div>
            <ProfileMangeContainer />
            <ProfileTodoContainer />
          </div>
        )}
        {/* <ProfileMangeContainer />
        <ProfileTodoContainer /> */}
      </div>
    );
  }
}

export default ProfilePage;
