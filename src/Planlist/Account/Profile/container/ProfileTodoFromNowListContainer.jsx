import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import MainNoTodoContainer from "../../../Main/Container/MainNoTodoContainer";
import TodoCreateDesktopForm from "../../../todo/view/TodoCreateDesktopForm";
import ProfileTodoFromNowListView from "../view/ProfileManageItem/ProfileTodoFromNowListView";
import ProfileMyTodoEmptyView from "../view/ProfileMyTodoEmptyView";
import ProfileTodoEmptyView from "../view/ProfileTodoEmptyView";

@inject("Store")
@observer
class ProfileTodoFromNowListContainer extends Component {
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
    } = this.props;
    const selectId = selectUser.accountId;
    const loginId = account.getLoginAccount.accountId;
    const today = todo.getToday;

    // 앞으로 해야 할 일 리스트를 종료 날짜별로 정렬
    const fromNow = todos
      // .filter((item) => item.writer === selectId)
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

    const count = fromNow_list.length;
    const page = "fromNow";

    return (
      <div>
        {count === 0 ? ( // 등록된 todo가 없을 때
          <div>
            {loginId === selectId ? (
              // 로그인된 계정의 페이지이면 todo 추가 화면
              <ProfileMyTodoEmptyView
                selectId={selectId}
                page={page}
                onModal={this.onModal}
                onChangeTitle={this.changeTodoTitle}
                createTodo={this.createTodo}
                today={today}
              />
            ) : (
              // 다른 사용자이면 empty 화면
              <ProfileTodoEmptyView selectId={selectId} page={page} />
            )}
          </div>
        ) : (
          // 등록된 todo가 있으면 todo 보여줌
          <ProfileTodoFromNowListView
            fromNow_list={fromNow_list}
            fromNow_date={fromNow_date}
            selectedTodo={selectedTodo}
            onLikeButton={onLikeButton}
            today={todo.getToday}
            onComplete={onComplete}
            onIncomplete={onIncomplete}
            loginId={loginId}
          />
        )}
      </div>
    );
  }
}

export default ProfileTodoFromNowListContainer;
