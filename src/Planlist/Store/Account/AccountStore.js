import { observable, computed, action } from "mobx";
// import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountAddModel from "../../Api/model/AccountAddModel";
import AccountModifyModel from "../../Api/model/AccountModifyModel";
import AccountSigninModel from "../../Api/model/AccountSigninModel";
import AccountRepository from "../../Api/Repository/AccountRepository";
import AuthRepository from "../../Api/Repository/AuthRepository";
import AccountGalleryRepository from "../../Api/Repository/AccountGalleryRepository";
import AccountGalleryModel from "../../Api/model/accountGallery/AccountGalleryModel";

export default class AccountStore {
  constructor(root) {
    this.root = root;
    this.accountRepository = new AccountRepository();
    this.authRepository = new AuthRepository();
    this.accountGalleryRepository = new AccountGalleryRepository();
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

  @observable authModifymove = true;

  //겔러리 저장
  @observable gallery = "";
  @observable gallery_filePath = ""

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

  @computed get getLoginAccount() {
    return this.loginAccount;
  }

  @action
  changeTest() {
    this.account = { A: "123" };
  }

  @action
  setAccountProp(key, value) {
    this.loginAccount = {
      ...this.loginAccount,
      [key]: value,
    };
  }

  //회원가입
  @action
  async signup(accountObj) {
    const accountAddModel = new AccountAddModel(accountObj);
    await this.authRepository.authSignup(accountAddModel);
  }

  //로그인
  @action
  async signin(account) {
    this.logCheck = false;
    const accountModel = new AccountSigninModel(account);
    const data = await this.authRepository.authSignin(accountModel);

    //유저가 존재 할 경우 localStorage에 토큰을 저장한다.
    if ("access_token" in data) {
      localStorage.jwt_token = data.access_token;
    }
  }

  // 로그인상태일 경우 해당 유저정보를 API에서 가져온다.
  @action
  async getApiAccountInfo() {
    const data = await this.accountRepository.accountInfo();
    this.loginAccount = new AccountModel(data);
    this.logCheck = true;
    console.log("로그인 정보")
    console.log(data);
    if(data.galleries[0]){
      this.gallery_filePath = "";
      this.gallery_filePath = data.galleries[0].filePath;
    }else{
      this.gallery_filePath = null;
    }
    
  }

  @action signout() {
    this.loginAccount = {};
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

    //이미지 저장
    if(account.galleries){
      this.gallery = await this.accountGalleryRepository.galleryAdd(account.galleries, account.accountId);
      this.gallery_filePath = this.gallery.filePath
      console.log(this.gallery_filePath)
    } 
    
    const accountModel = new AccountModifyModel(account);
    // const result = await this.accountRepository.accountModify(accountModel);
    // console.log(result);
    await this.accountRepository.accountModify(accountModel);
    this.selectAll();
  }

  @action
  async selectUser(accountId) {
    const account = await this.accountRepository.accountDetail(accountId);
    this.account = new AccountModel(account);
  }

  @action
  async selectAll() {
    const accounts = await this.accountRepository.accountList();
    this.accounts = accounts.map((account) => new AccountModel(account));
  }
}
