import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileTodoFromNowListView from "../view/ProfileManageItem/ProfileTodoFromNowListView";

@inject("Store")
@observer
class ProfileTodoFromNowListContainer extends Component {
  componentDidMount() {
    this.props.Store.todo.getApiTodos();
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo, account } = this.props.Store;
    const selectId = account.getAccount.accountId;
    const todos = todo.getTodos;
    const today = todo.getToday;

    // 앞으로 해야 할 일 리스트를 종료 날짜별로 정렬
    const fromNow = todos
      .filter((item) => item.writer === selectId)
      .filter((item) => item.endTime >= today)
      .sort((a, b) => (a.endTime > b.endTime ? 1 : -1));

    // 앞으로 해야 할 일 종료 날짜를 담은 리스트
    const fromNow_date = [];
    fromNow.map((item) => {
      if (!fromNow_date.includes(item.endTime)) {
        fromNow_date.push(item.endTime);
      }
    });

    // 앞으로 해야 할 일을 종료 날짜별로 묶음
    const fromNow_list = fromNow_date.map((item) => []);
    fromNow.map((item) =>
      fromNow_list[fromNow_date.indexOf(item.endTime)].push(item)
    );

    return (
      <ProfileTodoFromNowListView
        fromNow_list={fromNow_list}
        fromNow_date={fromNow_date}
      />
    );
  }
}

export default ProfileTodoFromNowListContainer;
