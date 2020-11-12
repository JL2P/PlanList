import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import MainNoTodoContainer from "../../../Main/Container/MainNoTodoContainer";
import ProfileTodoIncompletedListView from "../view/ProfileManageItem/ProfileTodoIncompletedListView";
import ProfileTodoEmptyView from "../view/ProfileTodoEmptyView";

@inject("Store")
@observer
class ProfileTodoIncompletedListContainer extends Component {
  render() {
    //기능들구현해서 prop로 넘겨주는 작업
    const { todo, account } = this.props.Store;
    const { selectUser, selectedTodo, onLikeButton, todos } = this.props;
    const selectId = selectUser.accountId;
    const loginId = account.getLoginAccount.accountId;
    // const todos = todo.getTodos;
    // const todos = todo.getAllTodos;
    const today = todo.getToday;

    // 기간 내에 못한 일 리스트를 정렬
    const incompleted = todos
      .filter((item) => item.completed === "N")
      .filter((item) => item.endTime < today)
      .sort((a, b) => (a.endTime < b.endTime ? 1 : -1));

    // 기간 내에 못한 일의 날짜를 담은 리스트
    const incompleted_date = [];
    incompleted.map((item) => {
      if (!incompleted_date.includes(item.endTime)) {
        incompleted_date.push(item.endTime);
      }
    });

    // 기간 내에 못한 일을 종료 날짜별로 묶음
    const incompleted_list = incompleted_date.map((item) => []);
    incompleted.map((item) =>
      incompleted_list[incompleted_date.indexOf(item.endTime)].push(item)
    );

    const count = incompleted.length;

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
          <ProfileTodoIncompletedListView
            incompleted_list={incompleted_list}
            incompleted_date={incompleted_date}
            selectedTodo={selectedTodo}
            onLikeButton={onLikeButton}
            today={todo.getToday}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoIncompletedListContainer;
