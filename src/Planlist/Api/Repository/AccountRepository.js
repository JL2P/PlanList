import axios from "axios";

import {axios_auth_GET } from "../common/CommonAxiosModules"

const HEADER = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
  },
};

export default class AccountRepository {
  //공통 적으로 사용되는 URL
  URL = "/api/accounts";

  accountInfo = ()=>{
      return axios_auth_GET(this.URL+"/info",{}).then(data=>{ 
        if(data.message === "account not found") window.location.href="/signin";  
        return data;
      });
  }

  // account list조회
  // GET /api/accounts/
  accountList = () => {
    return axios.get(this.URL, HEADER).then((request) => request.data || []);
  };

  //account 조회
  // GET /api/account/{accountId}/
  accountDetail = (accountId) => {
    return axios
      .get(this.URL + `/${accountId}`, HEADER)
      .then((request) => request.data || {});
  };

  // account 수정
  // PUT /api/account/
  accountModify = (AccountModel) => {
    return axios
      .put(this.URL + "/edit", AccountModel, HEADER)
      .then((request) => request.data || {});
  };

  // account 삭제
  // DELETE /api/account/{accountId}/
  accountDelete = (accountId) => {
    return axios
      .delete(this.URL + `/signout/${accountId}`)
      .then((request) => request.data || null);
  };

  //auth
  // POST /api/account/
  accountAuth = (AccountModel) => {
    return axios
      .post(this.URL + "/auth", AccountModel)
      .then((request) => request.data || {});
  };
}
