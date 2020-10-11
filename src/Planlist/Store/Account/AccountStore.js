import { observable, computed, action } from "mobx";
import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountRepository from "../../Api/Repository/AccountRepository"

export default class AccountStore {
  
  constructor(root) {
    this.root = root;
    this.accountRepository = new AccountRepository();
  }

  //모델 정의
  @observable
  account = {};
  
  @observable
  accounts = [];

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
      console.log("로그인이 완료되었습니다. mobx store에서 history를 사용하기 위해서는 라이브러리를 설치해야하나?")
      // this.history.push("/");
    }
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
