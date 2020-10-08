// Account 모델
/*
Account 데이터를 담는 클래스
*/
export default class AccountModel {
  constructor(accountObj) {
    this.accountId = accountObj.accountId; //Account ID
    this.email = accountObj.email; // 이메일
    this.name = accountObj.name; // 실명
    this.age = accountObj.age; // 나이
    this.gender = accountObj.gender; // 성별
    this.address = accountObj.address; // 주소
    this.phone = accountObj.phone; // 전화번호
    this.introduce = accountObj.introduce; // 소개
    this.rating = accountObj.rating; //점수
    this.displayAt = accountObj.displayAt; // 메인페이지 조회되는 조건
  }
}
