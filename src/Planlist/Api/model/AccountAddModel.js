
const img_list = [
  "/posts/img_pororo.jpg",
  "/posts/img_loopy.jpg",
  "/posts/img_crong.jpg",
  "/posts/img_poby.jpg",
  "/posts/img_harry.jpg",
  "/posts/img_petty.jpg", 
  "/posts/img_rody.jpg",
  "/posts/img_pengsoo.jpg",   
  "/posts/img_pingu.jpg"
  ]

/*
Account 데이터를 담는 클래스
백엔드 서버에서 정의한 Entity클래스와 맞게 작성한다.
--------------------------------------------------
# accountId : 유저 고유아이디
# email     : 이메일
# name      : 이름
# password  : 비밀번호
# gender    : 성별
# address   : 주소
---------------------------------------------------
*/
export default class AccountAddModel {
    constructor(accountObj) {
      this.imgUrl = img_list[Math.floor(Math.random() * 8)]
      this.accountId = accountObj.accountId; 
      this.email = accountObj.email; 
      this.name = accountObj.name;
      this.password = accountObj.password;
      this.birth = accountObj.birth; 
    }
  }