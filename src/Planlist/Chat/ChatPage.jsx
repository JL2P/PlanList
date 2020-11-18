import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import JoinRoom from "./view/JoinRoom/JoinRoom";

@inject("Store")
@observer
class ChatPage extends Component {
  componentDidMount() {
    const { account } = this.props.Store;

    account.getApiAccountInfo();
  }
  render() {
    const { account } = this.props.Store;
    return (
      <div>
        <JoinRoom account={account.getLoginAccount} />
      </div>
    );
  }
}

export default ChatPage;
