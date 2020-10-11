import { observable, computed, action } from "mobx";
import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountRepository from "../../Api/Repository/AccountRepository"

export default class AccountStore {
  
  constructor(root) {
    this.root = root;
    this.accountRepository = new AccountRepository();
  }

  // this.root.todo.

  //모델 정의
  @observable
  account = {};
  
  @observable
  accounts = [];
    
  @observable logCheck = false;
    
  @computed 
  get getAccount(){
    return this.account ? {...this.account} : {};
  }

  @computed get getAccounts(){
    return this.accounts;
  }

  @action
  changeTest(){
    this.account={A:"123"};
  }
  
  //회원가입
  @action
  async signup(account){
    const accountModel = new AccountModel(account);
    const result = await this.accountRepository.accountCreate(accountModel);
    console.log(result)
  };

  //로그인
  @action
  async signin(account){
  const accountModel = new AccountModel(account);
  const result = await this.accountRepository.accountSignin(accountModel);
    if(account.email === result.email && account.password === result.password){
      this.logCheck = true;
      this.account = result;
      console.log(result)
      console.log("로그인이 완료되었습니다.")
    }
  }
  //auth
  @action
  async auth(account){
    const accountModel = new AccountModel(account);
    const result = await this.accountRepository.accountAuth(accountModel);
    const check = {};
    if(check == result){
      this.logCheck = false;
    }
  }
  //authRemove
  @action
  async userRemove(accountId){
    const result = await this.accountRepository.accountDelete(accountId);
  }
  
  @action
  async selectUser(accountId){
    console.log(">>",this.account)
    console.log(accountId);
    this.account = await this.accountRepository.accountDetail(accountId);
    this.account = new AccountModel(this.account);
    console.log(">>",this.account);
    console.log(">>",this.account.email);
    console.log(">>",this.getAccount.email);
  }

  @action
  async selectAll() {
    this.accounts = await this.accountRepository.accountList();
    console.log(">>", this.accounts);
  }
}
