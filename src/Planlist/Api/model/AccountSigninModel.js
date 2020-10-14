/*
Account 데이터를 담는 클래스
백엔드 서버에서 정의한 Entity클래스와 맞게 작성한다.
--------------------------------------------------
# email     : 이메일
# password       : 비밀번호
---------------------------------------------------
*/
export default class AccountSigninModel {
    constructor(accountObj) { 
      this.email = accountObj.email; 
      this.password = accountObj.password;
    }
  }
  