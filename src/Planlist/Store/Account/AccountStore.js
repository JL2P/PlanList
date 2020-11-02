import { observable, computed, action } from "mobx";
// import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountAddModel from "../../Api/model/AccountAddModel";
import AccountModifyModel from "../../Api/model/AccountModifyModel";
import AccountSigninModel from "../../Api/model/AccountSigninModel";
import AccountRepository from "../../Api/Repository/AccountRepository";
import data from "../../Sample/Data/AccountSample/SampleAccounts";

export default class AccountStore {
  constructor(root) {
    this.root = root;
    this.accountRepository = new AccountRepository();
  }

  // this.root.todo.
  
  //로그인 중인 유저 정보
  @observable loginAccount = {};
  @observable logCheck = false; // 로그인 상태
  
  //선택된 유저 모델 정의
  @observable
  account = {};

  @observable
  accounts = [];



  @observable loginId = "giant_peng"; // 로그인된 아이디
  @observable authModifymove = true;

  @computed
  get getAccount() {
    return this.account;
  }

  @computed get getAccounts() {
    return this.accounts;
  }

  @computed get getAuthModifymove() {
    return this.authModifymove;
  }

  @computed get getLogCheck() {
    return this.logCheck;
  }

  @computed get loginId() {
    return this.loginId;
  }

  @computed get getLoginAccount(){
    return this.loginAccount;
  }

  @action
  changeTest() {
    this.account = { A: "123" };
  }

  @action
  setAccountProp(key, value) {
    this.account = {
      ...this.account,
      [key]: value,
    };
  }

  //회원가입
  @action
  async signup(accountObj) {
    const accountAddModel = new AccountAddModel(accountObj);
    console.log(accountAddModel);
    this.accountRepository.accountSignup(accountAddModel);
  }

  //로그인
  @action
  async signin(account) {
    this.logCheck = false;
    const accountModel = new AccountSigninModel(account);
    const data = await this.accountRepository.accountSignin(accountModel);
    // 임시로 주석
    // if (
    //   account.email === data.email &&
    //   account.password === data.password
    // ) {
    //   this.logCheck = true;
    //   this.loginAccount = new AccountModel(data);
    //   console.log("로그인이 완료되었습니다.");
    // }
    this.logCheck = true;
    this.loginAccount = new AccountModel(data);
    console.log("로그인이 완료되었습니다.");
  }

  @action signout() {
    console.log("로그인 상태");
    this.logCheck = false;
  }

  //auth
  @action
  async auth(account) {
    const accountModel = new AccountAddModel(account);
    const result = await this.accountRepository.accountAuth(accountModel);
    const check = {};
    if (check === result) {
      this.logCheck = false;
    }
  }

  //authRemove
  @action
  async userRemove(accountId) {
    await this.accountRepository.accountDelete(accountId);
    console.log("아이디 삭제 완료");
    this.selectAll();
  }

  //auth move
  @action
  btn_change() {
    this.authModifymove = false;
    console.log(this.authModifymove);
  }

  //UserModify
  @action
  async userModify(account) {
    const accountModel = new AccountModifyModel(account);
    // const result = await this.accountRepository.accountModify(accountModel);
    // console.log(result);
    await this.accountRepository.accountModify(accountModel);
    this.selectAll();
  }

  @action
  async selectUser(accountId) {
    console.log(accountId);
    const account = await this.accountRepository.accountDetail(accountId);
    this.account = new AccountModel(account);
  }

  @action
  async selectAll() {
    const accounts = await this.accountRepository.accountList();
    this.accounts = accounts.map((account) => new AccountModel(account));
  }

  //// account페이지 sampledata
  @observable accounts2 = data;
  @observable account2 = data[0];
  @computed get getAccounts2() {
    return this.accounts2 ? this.accounts2.slice() : [];
  }
  @computed get getAccount2() {
    return this.accounts2 ? { ...this.account2 } : {};
  }
  ////
}
