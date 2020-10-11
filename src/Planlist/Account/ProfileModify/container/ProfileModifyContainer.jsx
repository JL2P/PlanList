import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import ProfileModifyView from "../view/ProfileModifyView";

@inject("Store")
@observer
class ProfileModifyContainer extends Component {

  componentDidMount() {
    const { account } = this.props.Store;
    account.selectUser("song");
  }

  render() {
    const { account } = this.props.Store;

    return <ProfileModifyView account={account.getAccount} />;
  }
}

export default ProfileModifyContainer;
