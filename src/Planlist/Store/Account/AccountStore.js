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
  @observable account = {};
  @observable accounts = [];

  @computed getAccount=()=>{
    return this.account
  }

  @computed getAccounts=()=>{
    return this.accounts
  }

  @action
  async signup(account){
    const accountModel = new AccountModel(account);
    const result = await this.accountRepository.accountCreate(accountModel);
    console.log(result)
  };

  @action
  async selectUser(accountId){
    this.account = await this.accountRepository.accountDetail(accountId);
  }

  @action
  async selectAll() {
    this.accounts = await this.accountRepository.accountList();
  }
}
