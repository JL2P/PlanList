import React, { Component } from "react";
import DetailGroupAll from "../View/DetailGroupCenter/DetailGroupAll";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailGroupAllContainer extends Component {
  //해당 컨테이너 호출 후 API가져오게끔
  componentDidMount() {
    const groupId = this.props.groupId;
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;
    groupTodoStore.getApiGroupTodos(groupId);
  }

  //그룹페이지에서 todo 생성
  onDetailGroup_create = (e, groupTodoObj, file) => {
    e.preventDefault();
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;

    groupTodoStore.addGroupTodo(groupTodoObj, file).then((res) => {
      alert("그룹 계획이 생성되었습니다.");
      // window.location.reload();
    });
  };

  //todo 생성후 모달 닫기
  onDetailGroup_modalCheck = (check) => {
    const { group } = this.props.Store;
    group.detailGroup_modalCheck(check);
  };

  render() {
    const { group } = this.props.Store;
    const { account } = this.props.Store;
    const { getDetailGroup_modalOpen, getCategoryList } = group;
    const { loginAccount } = account;
    const { member } = this.props;
    const groupTodos = group.groupTodo.getGroupTodos;

    return (
      <DetailGroupAll
        onDetailGroup_create={this.onDetailGroup_create}
        getDetailGroup_modalOpen={getDetailGroup_modalOpen}
        onDetailGroup_modalCheck={this.onDetailGroup_modalCheck}
        onLogInUser={loginAccount}
        group={group.getGroup}
        groupTodos={groupTodos}
        categoryList={getCategoryList}
        member={member}
      />
    );
  }
}

export default DetailGroupAllContainer;
