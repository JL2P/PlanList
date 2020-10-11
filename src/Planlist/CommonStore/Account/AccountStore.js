import {observable, computed, action, } from "mobx";

// import data from "../../Sample/Data/Sign_Account_Data";
import AccountModel from "../../Api/model/AccountModel";
import AccountRepository from "../../Api/Repository/AccountRepository"

class AccountStore {

  @observable account= {};
  @observable accounts=[];

  constructor(root) {
    this.root = root;
    this.accountRepository = new AccountRepository();
  }


  @computed 
  get accountDetail(){
    return this.account;
  }

  @computed 
  get accountList(){
    return this.accounts;
  }
  
  
  //회원가입
  @action async signup(accountObj){
    const accountModel = new AccountModel(accountObj);
    const result = await this.accountRepository.accountCreate(accountModel);
    console.log(result)
  };

  //로그인
  @action async signin(accountObj){
  const accountModel = new AccountModel(accountObj);
  const result = await this.accountRepository.accountSignin(accountModel);
    if(accountObj.email === result.email && accountObj.password === result.password){
      console.log("로그인이 완료되었습니다. mobx store에서 history를 사용하기 위해서는 라이브러리를 설치해야하나?")
      // this.history.push("/");
    }
  }
  
  @action async selectUser(accountId){
    console.log("selectUser")
    const accountObj = await this.accountRepository.accountDetail(accountId);
    this.account = new AccountModel(accountObj);
    console.log(this.account);
  }

  @action
  change(){
    this.account = "TETET";
    console.log(this.account)
  }


  @action
  async selectAll() {
    this.accounts = await this.accountRepository.accountList();
  }
}

export default AccountStore