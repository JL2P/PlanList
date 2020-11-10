import axios from "axios"

/**
 * axios 공통 모듈
 * token 인증을 위해 헤더를 세팅하고,
 * 토큰이 유효하지 않거나 존재하지 않을시에 로그인 페이지로 이동한다.
 */

const HEADER = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    }
}

export const axios_auth_GET = (url, defualtReturnValue="")=>{
    return axios.get(url, HEADER)
        .then(res=>{
            return res.data ||defualtReturnValue})
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_auth_POST = (url, data={}, defualtReturnValue="")=>{
    return axios.post(url, data, HEADER)
        .then(res=>res.data||defualtReturnValue)
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_auth_PUT = (url,data={}, defualtReturnValue="")=>{
    return axios.put(url,data,HEADER)
        .then(res=>res.data||defualtReturnValue)
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_auth_DELETE = (url, defualtReturnValue="")=>{
    return axios.delete(url,HEADER)
        .then(res=>res.data||defualtReturnValue)
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}


const errorTypeCheck=(error)=>{
    if(error ==="unauthorized") return true;
    if(error ==="invalid_token") return true;

    return false;
}