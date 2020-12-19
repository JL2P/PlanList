import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class AuthRepository{

    //공통 적으로 사용되는 URL
    URL = "/api/auth";

    // POST /api/auth/signin/
    authSignin = (AccountSigninModel) => {
        return axios.post(this.URL+"/signin",AccountSigninModel).then(request=>request.data||{});
    }

    // POST /api/auth/signup
    authSignup = (AccountAddModel) => {
        const AuthAddModel= {
            uid: AccountAddModel.email,
            password:AccountAddModel.password,
            name:AccountAddModel.accountId
          }

        return axios.post(this.URL+"/signup",AuthAddModel).then(request=>{
            // 인증서버에 유저가 등록이 되었을 경우 토큰발행
            if('access_token' in request.data){
                localStorage.jwt_token=request.data.access_token;
            
                const HEADER = {
                    headers: {
                        'Authorization': `Bearer ${request.data.access_token}`
                    }
                }

                axios.post("/api/accounts",AccountAddModel,HEADER)
            }
        });
    }

    authSignout=(accountId)=>{
        axios.delete(this.URL+`/${accountId}`).then(request=>request.data||{});
    }
}