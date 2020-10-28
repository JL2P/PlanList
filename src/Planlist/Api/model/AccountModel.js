/*
Account 데이터를 담는 클래스
백엔드 서버에서 정의한 Entity클래스와 맞게 작성한다.
--------------------------------------------------
# accountId : 유저 고유아이디
# email     : 이메일
# name      : 이름
# password  : 비밀번호
# age       : 나이
# gender    : 성별
# address   : 주소
# phone     : 전화번호
# introduce : 소개
# rating    : 유저 점수
# displayAt : 글 조회 조건
---------------------------------------------------
*/
export default class AccountModel {
  constructor(accountObj) {
    this.accountId = accountObj.accountId; 
    this.email = accountObj.email; 
    this.name = accountObj.name;
    // this.password = accountObj.password;
    this.birth = accountObj.birth; 
    this.gender = accountObj.gender; 
    // this.address = accountObj.address; 
    // this.phone = accountObj.phone; 
    this.introduce = accountObj.introduce; 
    // this.rating = accountObj.rating; 
    // this.displayAt = accountObj.displayAt || "ALL";
    this.loginType = accountObj.loginType;
    this.openAt = accountObj.openAt;
    this.usedAt = accountObj.usedAt;
  }
}
