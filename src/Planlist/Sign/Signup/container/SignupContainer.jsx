import React, { Component } from "react";
import SignupView from "../view/SignupView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class SignupContainer extends Component {
  //Signup버튼 클릭시 동작하는 함수
  onSignup = (e, accountObj) => {
    // e 새로고침 방지 추가
    e.preventDefault();

    // Store에서 account Store가져오기
    const { account } = this.props.Store;

    //회원가입 실행
    account.signup(accountObj);
  };

  render() {
    return <SignupView />;
  }
}

export default SignupContainer;
