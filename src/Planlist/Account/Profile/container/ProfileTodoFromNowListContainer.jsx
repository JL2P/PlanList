import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileTodoFromNowListView from "../view/ProfileManageItem/ProfileTodoFromNowListView";

@inject("Store")
@observer
class ProfileTodoFromNowListContainer extends Component {
  componentDidMount() {
    this.props.Store.todo.getApiTodo(3);
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo } = this.props.Store;
    const todos = todo.getTodos2;

    const today_date = new Date(); // 현재 날짜 받아오기
    const year = today_date.getFullYear();
    const month = today_date.getMonth() + 1; // 1월:0
    const date = today_date.getDate(); // 날짜
    // const day = todays_date.getDay(); // 요일
    const today = year + "-" + month + "-" + date;
    console.log("날짜!!", today_date);

    // 앞으로 해야 할 일 리스트를 종료 날짜별로 정렬
    const fromNow = todos
      .filter((item) => item.end_time >= today)
      .sort((a, b) => (a.end_time > b.end_time ? 1 : -1));
    // .sort((a, b) => a.end_time - b.end_time);

    // console.log("count", fromNow.length);

    // 앞으로 해야 할 일 종료 날짜를 담은 리스트
    const fromNow_date = [];
    fromNow.map((item) => {
      if (!fromNow_date.includes(item.end_time)) {
        fromNow_date.push(item.end_time);
      }
    });

    // 앞으로 해야 할 일을 종료 날짜별로 묶음
    const fromNow_list = fromNow_date.map((item) => []);
    fromNow.map((item) =>
      fromNow_list[fromNow_date.indexOf(item.end_time)].push(item)
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
