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

  @action
  async signup(account){
    const accountModel = new AccountModel(account);
    const result = await this.accountRepository.accountCreate(accountModel);
    console.log(result)
  };

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
