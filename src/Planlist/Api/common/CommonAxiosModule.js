import axios from "axios"

/**
 * axios 공통 모듈
 * 
 */

const HEADER = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    }
}

export const axios_GET = (url, returnType="")=>{
    return axios.get(url,HEADER)
        .then(res=>{
            console.log(res)
            return res.data ||returnType})
        .catch(function (error) {
            // console.log(error.response)
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_POST = (url,data={}, returnType="")=>{
    return axios.post(url,data,HEADER)
        .then(res=>res.data||returnType)
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_PUT = (url,data={}, returnType="")=>{
    return axios.put(url,data,HEADER)
        .then(res=>res.data||returnType)
        .catch(function (error) {
            //토큰인증에 실패한 경우 로그인화면으로 이동
            if (error.response) {
                if(errorTypeCheck(error.response.data.error)) window.location.href="/signin";  
                }
            });
}

export const axios_DELETE = (url, returnType="")=>{
    return axios.delete(url,HEADER)
        .then(res=>res.data||returnType)
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