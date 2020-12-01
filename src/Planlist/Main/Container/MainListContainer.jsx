import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MainListView from "../View/MainListView";
import MainItemGroupView from "../View/MainItem/MainItemGroupView";
import MainItemFrame from "../View/MainItem/MainItemFrame";
import MainNoTodoContainer from "../Container/MainNoTodoContainer";

@inject("Store")
@observer
class MainPageContainer extends Component {
  constructor(props) {
    super(props);

    //메인화면 조회되는 컬럼 수
    this.COLUMN_COUNT = 3;
    //각 Columne의 높이값을 비교하기위한 ref

    this.columns = [...Array(this.COLUMN_COUNT).keys()].map((_) =>
      React.createRef()
    );
  }

  componentDidMount() {
    this.props.Store.todo.getApiTodos();

    // 나의 todo만 수정, 삭제할 수 있도록
    const { account } = this.props.Store;
    account.getApiAccountInfo();
  }

  componentDidUpdate() {
    const { todo } = this.props.Store;
    const todos = todo.getTodos;
    if (todos.length > 0) {
      const columnHeights = this.columns.map(
        (item) => item.current.clientHeight
      );

      const MaxValue = Math.max.apply(null, columnHeights);
      const MinValue = Math.min.apply(null, columnHeights);

      const maxIndex = columnHeights.indexOf(MaxValue);
      const minIndex = columnHeights.indexOf(MinValue);

      //각 div를 비교했을때, 최대높이와 최소높이의 차이가 150이상일 경우

      if (MaxValue - MinValue > 300) {
        let changeTodoList = todo.getTodosFrame;
        //최대높이의 item을 최소 높이의 아이템 배열에 넣어준다.
        changeTodoList[minIndex].push(changeTodoList[maxIndex].pop());
      }
    }
  }

  selectedTodo = (todoModel) => {
    const { todo } = this.props.Store;
    todo.setTodo(todoModel);
    todo.setComments(todoModel.comments);
  };

  onLikeButton = (todoId, action) => {
    const { todo } = this.props.Store;
    if (action === "ADD") {
      todo.addLike(todoId);
    } else {
      todo.removeLike(todoId);
    }
  };

  divisonToItemGroup = (data, n) => {
    const MainItemGroupList = [];

    // 나의 todo만 수정, 삭제할 수 있도록
    const { account } = this.props.Store;
    const loginId = account.getLoginAccount.accountId;

    //데이터를 이용하여 메인 아이템 리스트 생성
    const MainItemViewList = data.map((column) =>
      column.map((todoModel, idx) => (
        <MainItemFrame
          key={idx}
          todoModel={todoModel}
          onDeleteTodo={this.onDeleteTodo}
          selectedTodo={this.selectedTodo}
          onLikeButton={this.onLikeButton}
          loginId={loginId}
        />
      ))
    );

    //각 column을 itemGroup으로 만들어주기
    for (let i = 0; i < n; i++)
      MainItemGroupList.push(
        <MainItemGroupView
          key={i}
          items={MainItemViewList[i]}
          columnRef={this.columns[i]}
        />
      );

    return MainItemGroupList;
  };

  render() {
    const { todo } = this.props.Store;
    const todos = todo.getTodos;
    const todosFrame = todo.getTodosFrame;

    //메인 아이템 리스트를 각 화면 커럼에 순서대로 배치
    const MainItemGroupListView = this.divisonToItemGroup(
      todosFrame,
      this.COLUMN_COUNT
    );

    const mainList =
      todos.length > 0 ? (
        <MainListView itemList={MainItemGroupListView} />
      ) : (
        <MainNoTodoContainer />
      );

    return mainList;
  }
}

export default MainPageContainer;
