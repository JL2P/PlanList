import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileTodoPastListView from "../view/ProfileManageItem/ProfileTodoPastListView";

@inject("Store")
@observer
class ProfileTodoPastListContainer extends Component {
  componentDidMount() {
    this.props.Store.todo.getApiTodo(3);
  }

  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo } = this.props.Store;
    const todos = todo.getTodos2;

    const todays_date = new Date(); // 현재 날짜 받아오기
    const year = todays_date.getFullYear();
    const month = todays_date.getMonth() + 1; // 1월:0
    const date = todays_date.getDate(); // 날짜
    // const day = todays_date.getDay(); // 요일
    const today = year + "-" + month + "-" + date;
    console.log("겟타임", todays_date.getTime);

    // 종료일이 지난 할 일 리스트를 정렬
    const past = todos
      .filter((item, index) => item.end_time < today)
      .sort((a, b) => (a.end_time < b.end_time ? 1 : -1));
    // .sort((a, b) => b.end_time - a.end_time);

    // 종료일이 지난 날짜를 담은 리스트
    const past_date = [];
    past.map((item) => {
      if (!past_date.includes(item.end_time)) {
        past_date.push(item.end_time);
      }
    });

    console.log("투두스");
    console.log(past_date);

    // 날짜 정렬 테스트
    // const test = ["2020-08-10", "2020-10-10", "2020-06-10"];
    // // const test2 = test.sort((a, b) => a - b);
    // console.log("투두스");
    // console.log(test.sort((a, b) => (a > b ? 1 : -1)));

    // 종료일이 지난 할 일을 종료 날짜별로 묶음
    const past_list = past_date.map((item) => []);
    past.map((item) => past_list[past_date.indexOf(item.end_time)].push(item));

    return (
      <ProfileTodoPastListView past_list={past_list} past_date={past_date} />
    );
  }
}

export default ProfileTodoPastListContainer;
