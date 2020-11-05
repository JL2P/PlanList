import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class FollowRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/accounts/";

    //@PostMapping("/follow")
    followFunction = (AccountId, FollowId) => {
        const data={
            "myAccountId" : AccountId,
            "followAccountId" : FollowId
        }
       return axios.post(this.URL+"follow", data).then(request=>request.data||{});


    }

    //@GetMapping("/followers")
    getFollowersFunction = (AccountId) => {
        const data={
            "myAccountd" : AccountId
        }
        return axios.get(this.URL+"followers", data).then(request=>request.data||{});
    }

    //@GetMapping("/isfollow")
    followCheckFunction = (AccountId, FollowId) => {
        const data={
            "myAccountId" : AccountId,
            "followAccountId" : FollowId
        }
       return axios.post(this.URL+"isfollow", data).then(request=>request.data||{});

    }
    
}