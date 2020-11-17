import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DetailGroupAllList from "../View/DetailGroupCenter/DetailGroupAllList";

@inject("Store")
@observer
class GroupTodoContainer extends Component {
  onDeleteComment = () => {
    alert("onDeleteComment");
  };

  render() {
    const { account } = this.props.Store;
    const { item } = this.props;

    return (
      <DetailGroupAllList
        item={item}
        seletedTodoComments={[]}
        loginAccount={account.getLoginAccount}
        onDeleteComment={this.onDeleteComment}
      />
    );
  }
}

export default GroupTodoContainer;
