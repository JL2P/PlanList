import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DetailGroupAllList from "../View/DetailGroupCenter/DetailGroupAllList";

@inject("Store")
@observer
class GroupTodoContainer extends Component {
  onDeleteComment = (comment) => {
    //comment.subCommentId가 존재할 경우는 SubComment임
    const commentType = comment.subCommentId ? "SUBCOMMENT" : "COMMENT";
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;
    const groupId = group.getGroup.id;
    const groupTodoId = groupTodoStore.getGroupTodo.groupTodoId;

    //대댓글일 경우
    if (commentType === "SUBCOMMENT") {
      groupTodoStore.deleteGroupTodoSubComment(groupId, groupTodoId, comment);
    } //댓글일 경우
    else {
      groupTodoStore.deleteGroupTodoComment(groupId, groupTodoId, comment);
    }
  };

  //GroupTodo를 선택할 때 어떤 GroupTodo를 선택했는지 설정한다.
  selectedGroupTodo = (groupTodo) => {
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;
    groupTodoStore.setGroupTodo(groupTodo);
  };

  onAttendGroupTodo = () => {
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;
    groupTodoStore.attendGroupTodo();
  };

  render() {
    const { account, group } = this.props.Store;
    const { item } = this.props;
    const groupTodoStore = group.groupTodo;
    const groupTodoComments = groupTodoStore.getGroupTodoComments;

    return (
      <DetailGroupAllList
        groupTodo={item}
        selectedGroupTodo={this.selectedGroupTodo}
        selectedTodoComments={groupTodoComments}
        loginAccount={account.getLoginAccount}
        onDeleteComment={this.onDeleteComment}
        onAttendGroupTodo={this.onAttendGroupTodo}
      />
    );
  }
}

export default GroupTodoContainer;
