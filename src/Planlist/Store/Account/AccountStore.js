import { observable, computed, action } from "mobx";
import data from "../../Sample/Data/Sign_Account_Data";

export default class AccountStore {
  constructor(root) {
    this.root = root;
  }

  //모델 정의
  @observable account = {};
  @observable accounts = [];

  @action
  signup = (account) => {
    if (account.email === data.email) {
      console.log("중복된 아이디입니다.");
    } else {
      console.log("회원가입에 성공했습니다.");
    }
  };
}
