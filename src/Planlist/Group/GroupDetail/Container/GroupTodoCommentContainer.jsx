import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommentInputFormView from "../../../todo/view/comment/CommentInputFormView";

@inject("Store")
@observer
class GroupTodoCommentContainer extends Component {
  createComment = (text) => {
    const { comment, setReply } = this.props;
    const { group } = this.props.Store;
    const groupTodoStore = group.groupTodo;
    const groupId = group.getGroup.id;
    const groupTodoId = groupTodoStore.getGroupTodo.groupTodoId;

    if (comment) {
      groupTodoStore.addGroupTodoSubComment(
        groupId,
        groupTodoId,
        comment.commentId,
        {
          targetId: comment.writer,
          text: text,
        }
      );
      setReply(false);
    } else {
      groupTodoStore.addGroupTodoComment(groupId, groupTodoId, {
        text: text,
      });
    }
  };

  render() {
    return <CommentInputFormView createComment={this.createComment} />;
  }
}

export default GroupTodoCommentContainer;
