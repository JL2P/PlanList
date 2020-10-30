export default class AccountAddModel {
  constructor(accountObj) {
    this.accountId = accountObj.accountId;
    this.email = accountObj.email;
    this.name = accountObj.name;
    this.birth = accountObj.birth;
    this.gender = accountObj.gender;
    this.introduce = accountObj.introduce;
  }
}
