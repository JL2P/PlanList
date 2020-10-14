import { observable, computed, action } from "mobx";
// import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountAddModel from "../../Api/model/AccountAddModel";
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
  @observable authModifymove = true;
    
  @computed 
  get getAccount(){
    return this.account;
  }

  @computed get getAccounts(){
    return this.accounts;
  }

  @computed get getAuthModifymove(){
    return this.authModifymove;
  }

  @action
  changeTest(){
    this.account={A:"123"};
  }
  
  //회원가입
  @action
  async signup(account){
    console.log(account);
    const accountModel = new AccountAddModel(account);
    console.log(accountModel);
    const result = await this.accountRepository.accountCreate(accountModel);
    console.log(result)
    alert('대시')
  };

  //로그인
  @action
  async signin(account){
  this.logCheck = false;
  const accountModel = new AccountModel(account);
  const result = await this.accountRepository.accountSignin(accountModel);
  console.log(account);
  console.log(result)
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
    if(check === result){
      this.logCheck = false;
    }
  }
  //authRemove
  @action
  async userRemove(accountId){
    await this.accountRepository.accountDelete(accountId);
    console.log("아이디 삭제 완료");
  }
  //auth move
  @action
  btn_change(){
    this.authModifymove = false
    console.log(this.authModifymove)
  }

  //UserModify
  @action
  async userModify(account){
    const accountModel = new AccountModel(account)
    const result = await this.accountRepository.accountModify(accountModel);
    console.log(result);
  }

  
  @action
  async selectUser(accountId){
    console.log(accountId);
    const account = await this.accountRepository.accountDetail(accountId);
    this.account = new AccountModel(account);
  }

  @action
  async selectAll() {
    this.accounts = await this.accountRepository.accountList();
  }
}
