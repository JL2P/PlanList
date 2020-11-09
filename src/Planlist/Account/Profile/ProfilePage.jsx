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
    const { account, todo, follow } = this.props.Store;
    console.log(">>", this.props.match);
    const id = this.props.match.params.id;

    account.selectUser(id);

    account.selectAll();
    todo.getApiTodos();

    //API를 가져오는 부분

    follow.followCheck();
  }

  render() {
    const { account } = this.props.Store;
    const loginCheck = account.getLogCheck;
    const id = this.props.match.params.id;
    const selectUser =
      id === undefined ? account.getLoginAccount : account.getAccount;
    console.log("확인");
    console.log("아이디 : ", account.getAccount.accountId);
    console.log("로그인 아이디 : ", account.getLoginAccount.accountId);
    console.log("selectUser", selectUser.accountId);
    return (
      <div>
        {!loginCheck && id === undefined ? (
          <ProfileNonMemberView selectUser={selectUser} />
        ) : (
          <div>
            <ProfileMangeContainer
              selectUser={selectUser}
              loginAccount={account.getLoginAccount}
            />
            <ProfileTodoContainer selectUser={selectUser} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfilePage;
