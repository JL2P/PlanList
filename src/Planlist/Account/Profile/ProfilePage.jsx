import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import MyAchievementRateContainer from "../../Ranking/container/MyAchievementRateContainer";
import MyAchievementRateView from "../../Ranking/view/MyAchievementRateView";
import ProfileMangeContainer from "./container/ProfileMangeContainer";
import ProfileTodoContainer from "./container/ProfileTodoContainer";
import ProfileNonMemberView from "./view/ProfileNonMemberView";
import ProfileNotFoundAccountView from "./view/ProfileNotFoundAccountView";

@inject("Store")
@observer
class ProfilePage extends Component {
  componentDidMount() {
    const { account, todo, follow } = this.props.Store;
    const id = this.props.match.params.id;
    console.log(account.loginAccount)
    
    account.selectUser(id); // url의 id와 일치하는 계정을 선택
    account.selectAll();

    // todo.getApiTodos(); // 로그인된 계정의 todos
    // todo.getApiAllTodos(); // 모든 todos
    todo.getApiSelectTodos(id); // 선택된 계정의 todos
    todo.getApiLoginTodos(); // 로그인된 계정의 todos

    //API를 가져오는 부분
    follow.followCheck(id);
  }

  render() {
    const { account, todo } = this.props.Store;
    const loginCheck = account.getLogCheck; // true/false
    const id = this.props.match.params.id; // url의 id
    const selectUser = // url의 id와 일치하는 계정 선택, undefined면 로그인된 계정 선택
      id === undefined ? account.getLoginAccount : account.getAccount;
    const selectUserTodos =
      id === undefined ? todo.getLoginTodos : todo.getSelectTodos;

    return (
      <div>
        {!loginCheck && id === undefined ? (
          <ProfileNonMemberView selectUser={selectUser} />
        ) : selectUser.accountId === undefined ? ( // url에 해당하는 계정이 없으면, 해당 계정이 없다는 페이지 보여줌
          <ProfileNotFoundAccountView id={id} />
        ) : (
          // url의 id와 일치하는 계정 페이지 보여줌
          <div>
            <ProfileMangeContainer
              selectUser={selectUser}
              selectUserTodos={selectUserTodos}
              loginAccount={account.getLoginAccount}
            />
            {/* <MyAchievementRateContainer /> */}
            <ProfileTodoContainer
              selectUser={selectUser}
              selectUserTodos={selectUserTodos}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfilePage;
