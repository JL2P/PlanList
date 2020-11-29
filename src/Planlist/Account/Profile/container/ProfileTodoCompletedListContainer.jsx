import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileTodoCompletedListView from "../view/ProfileManageItem/ProfileTodoCompletedListView";
import ProfileTodoEmptyView from "../view/TodoEmptyItem/ProfileTodoEmptyView";
import MyCompletedEmptyView from "../view/TodoEmptyItem/MyCompletedEmptyView";

@inject("Store")
@observer
class ProfileTodoCompletedListContainer extends Component {
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo, account } = this.props.Store;
    const {
      selectUser,
      selectedTodo,
      onLikeButton,
      todos,
      onComplete,
      onIncomplete,
      onDeletePoint,
    } = this.props;
    const selectId = selectUser.accountId;
    const loginId = account.getLoginAccount.accountId;

    // 완료한 일 리스트 정렬
    const completed = todos
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
    const page = "completed";

    return (
      <div>
        {count === 0 ? (
          <div>
            {loginId === selectId ? (
              <MyCompletedEmptyView page={page} selectId={selectId} />
            ) : (
              // <p>hi</p>
              <ProfileTodoEmptyView page={page} selectId={selectId} />
            )}
          </div>
        ) : (
          <ProfileTodoCompletedListView
            completed_list={completed_list}
            completed_date={completed_date}
            selectedTodo={selectedTodo}
            onLikeButton={onLikeButton}
            today={todo.getToday}
            onComplete={onComplete}
            onIncomplete={onIncomplete}
            loginId={loginId}
            selectId={selectId}
            onDeletePoint={onDeletePoint}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoCompletedListContainer;
