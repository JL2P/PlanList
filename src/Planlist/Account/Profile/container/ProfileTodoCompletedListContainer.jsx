import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import MainNoTodoContainer from "../../../Main/Container/MainNoTodoContainer";
import ProfileTodoCompletedListView from "../view/ProfileManageItem/ProfileTodoCompletedListView";
import ProfileTodoEmptyView from "../view/ProfileTodoEmptyView";

@inject("Store")
@observer
class ProfileTodoCompletedListContainer extends Component {
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo, account } = this.props.Store;
    const { selectUser, selectedTodo, onLikeButton, todos } = this.props;
    const selectId = selectUser.accountId;
    const loginId = account.getLoginAccount.accountId;
    // const todos = todo.getTodos;
    // const todos = todo.getAllTodos;
    const today = todo.getToday;

    // 완료한 일 리스트 정렬
    const completed = todos
      .filter((item) => item.writer === selectId)
      .filter((item) => item.completed === "Y")
      .sort((a, b) => (a.endTime < b.endTime ? 1 : -1));

    // 완료한 일의 날짜를 담은 리스트
    const completed_date = [];
    completed.map((item) => {
      if (!completed_date.includes(item.endTime)) {
        completed_date.push(item.endTime);
      }
    });

    // 완료한 일을 종료 날짜별로 묶음
    const completed_list = completed_date.map((item) => []);
    completed.map((item) =>
      completed_list[completed_date.indexOf(item.endTime)].push(item)
    );

    const count = completed.length;
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
          <ProfileTodoCompletedListView
            completed_list={completed_list}
            completed_date={completed_date}
            selectedTodo={selectedTodo}
            onLikeButton={onLikeButton}
            today={todo.getToday}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoCompletedListContainer;
