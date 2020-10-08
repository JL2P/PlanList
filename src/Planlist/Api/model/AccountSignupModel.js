/*
회원가입에 필요한 모델 클래스
명호씨가 만든 signupView에서 입력받는 값들을 모아놓은 모델
*/
export default class AccountSignupModel {
  constructor(signupObj) {
    this.accountId = signupObj.accountId; //nickname과 같음 DB에 저장할때는 컬럼명과 맞추기 위함
    this.email = signupObj.email;
    this.password = signupObj.password;
    this.name = signupObj.name;
    this.birth = signupObj.birth;
  }
}
