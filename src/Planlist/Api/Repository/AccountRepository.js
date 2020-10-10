import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class AccountRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/accounts/";

    // account list조회
    // GET /api/accounts/
    accountList =()=>{
        return axios.get(this.URL).then(requuest=>requuest.data||[])
    }

    //account 조회
    // GET /api/account/{accountId}/
    accountDetail = (accountId)=>{
        return axios.get(this.URL+`${accountId}/`).then(requuest=>requuest.data||{})
    }

    // account 추가
    // POST /api/account/
    accountCreate = (AccountModel)=>{
        return axios.post(this.URL+"signup/",AccountModel).then(requuest=>requuest.data||{})
    }

    // account 수정
    // PUT /api/account/
    accountModify = (AccountModel)=>{
        return axios.put(this.URL+"edit/",AccountModel).then(requuest=>requuest.data||{})
    }

    // account 삭제
    // DELETE /api/account/{accountId}/
    accountDelete = (accountId)=>{
        return axios.delete(this.URL+`signout/${accountId}/`).then(requuest=>requuest.data||null)
    }
}