import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import MainNoTodoContainer from "../../../Main/Container/MainNoTodoContainer";
import ProfileTodoPastListView from "../view/ProfileManageItem/ProfileTodoPastListView";
import ProfileTodoEmptyView from "../view/TodoEmptyItem/ProfileTodoEmptyView";


@inject("Store")
@observer
class ProfileTodoPastListContainer extends Component {
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo, account } = this.props.Store;
    const { selectUser, selectedTodo, onLikeButton, todos } = this.props;
    const selectId = selectUser.accountId;
    const loginId = account.getLoginAccount.accountId;
    const today = todo.getToday;

    // 종료일이 지난 할 일 리스트를 정렬
    const past = todos
      .filter((item) => item.endTime < today)
      .sort((a, b) => (a.endTime < b.endTime ? 1 : -1));

    // 종료일이 지난 날짜를 담은 리스트
    const past_date = [];
    past.map((item) => {
      if (!past_date.includes(item.endTime)) {
        past_date.push(item.endTime);
      }
    });

    // 종료일이 지난 할 일을 종료 날짜별로 묶음
    const past_list = past_date.map((item) => []);
    past.map((item) => past_list[past_date.indexOf(item.endTime)].push(item));

    const count = past_list.length;

    return (
      <div>
        {count === 0 ? (
          <div>
            {loginId === selectId ? (
              <MainNoTodoContainer />
            ) : (
              <ProfileTodoEmptyView />
            )}
          </div>
        ) : (
          <ProfileTodoPastListView
            past_list={past_list}
            past_date={past_date}
            selectedTodo={selectedTodo}
            onLikeButton={onLikeButton}
            today={todo.getToday}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoPastListContainer;
