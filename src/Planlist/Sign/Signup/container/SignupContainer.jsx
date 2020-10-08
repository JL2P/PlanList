import React, { Component } from "react";
import SignupView from "../view/SignupView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class SignupContainer extends Component {
  signup = (e, accountObj) => {
    // e 새로고침 방지 추가
    // Store에서 account Store가져오기
    const { account } = this.props.Store;
    //회원가입
    account.signup(accountObj);
  };

  render() {
    return <SignupView />;
  }
}

export default SignupContainer;
