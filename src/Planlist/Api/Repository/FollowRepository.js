import axios from "axios"
import {axios_auth_POST, axios_auth_GET} from "../common/CommonAxiosModules"


//Account관련 Api와 연동하는 클래스
export default class FollowRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/accounts/follow/";

     // 아직 confirm 받지 않은 나의 모든 팔로워 조회
   // GET /api/accounts/
    AllFollowers = () => {
    return axios_auth_GET(this.URL,[]);
}

    //@PostMapping("/follow")
    followFunction = (AccountId, FollowId) => {
        const data={
            "myAccountId" : AccountId,
            "followAccountId" : FollowId
        }
        // url
        // data
        // format 
        return axios_auth_POST(this.URL,data,{});
    }

    //@GetMapping("/followerlist")
    getFollowerlistFunction = (AccountId) => {
        const data={
            "myAccountd" : AccountId
        }
        return axios.get(this.URL+"followerlist", data).then(request=>request.data||{});
    }

    //@GetMapping("/followinglist")
    getFollowinglistFunction = (AccountId) => {
        const data={
            "myAccountd" : AccountId
        }
        return axios.get(this.URL+"followinglist", data).then(request=>request.data||{});
    }

    

    //@GetMapping("/isfollow")
    followCheckFunction = (FollowId) => {
       return axios_auth_POST(this.URL+`isfollow/${FollowId}`,{},{});
    }

    //@GetMapping("/confirm/{followId}")
    followConfirmFunction = (FollowId) => {
        return axios_auth_POST(this.URL+`confirm/${FollowId}`,{},{});
    }
}