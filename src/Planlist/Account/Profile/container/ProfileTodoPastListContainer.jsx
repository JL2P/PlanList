import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileTodoPastListView from "../view/ProfileManageItem/ProfileTodoPastListView";

@inject("Store")
@observer
class ProfileTodoPastListContainer extends Component {
  componentDidMount() {
    this.props.Store.todo.getApiTodos();
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo } = this.props.Store;
    const todos = todo.getTodos2;
    const today = todo.getToday;

    // 종료일이 지난 할 일 리스트를 정렬
    const past = todos
      .filter((item) => item.end_time < today)
      .sort((a, b) => (a.end_time < b.end_time ? 1 : -1));

    // 종료일이 지난 날짜를 담은 리스트
    const past_date = [];
    past.map((item) => {
      if (!past_date.includes(item.end_time)) {
        past_date.push(item.end_time);
      }
    });

    // 종료일이 지난 할 일을 종료 날짜별로 묶음
    const past_list = past_date.map((item) => []);
    past.map((item) => past_list[past_date.indexOf(item.end_time)].push(item));

    return (
      <ProfileTodoPastListView past_list={past_list} past_date={past_date} />
    );
  }
}

export default ProfileTodoPastListContainer;
