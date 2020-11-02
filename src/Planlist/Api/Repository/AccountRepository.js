import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class AccountRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/accounts/";

    // account list조회
    // GET /api/accounts/
    accountList =()=>{
        return axios.get(this.URL).then(request=>request.data||[])
    }

    //account 조회
    // GET /api/account/{accountId}/
    accountDetail = (accountId)=>{
        return axios.get(this.URL+`${accountId}/`).then(request=>request.data||{})
    }

    
    // account 수정
    // PUT /api/account/
    accountModify = (AccountModel)=>{
        return axios.put(this.URL+"edit/",AccountModel).then(request=>request.data||{})
    }

    // account 삭제
    // DELETE /api/account/{accountId}/
    accountDelete = (accountId)=>{
        return axios.delete(this.URL+`signout/${accountId}/`).then(request=>request.data||null)
    }

    // 테스트 로그인
    // POST /api/accounts/signin/
    accountSignin = (AccountModel) => {
        return axios.post(this.URL+"signin",AccountModel).then(request=>request.data||{});
    }

    // 테스트 회원가입
    // POST /api/accounts/signup
    accountSignup = (AccountAddModel) => {
        return axios.post(this.URL+"signup",AccountAddModel).then(request=>request.data||{});
    }

    //auth
    // POST /api/account/
    accountAuth = (AccountModel) => {
        return axios.post(this.URL+"auth/",AccountModel).then(request=>request.data||{});
    }

}