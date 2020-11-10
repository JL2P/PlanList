import axios from "axios"
import {axios_auth_POST} from "../common/CommonAxiosModules"

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
        // url
        // data
        // format 
        return axios_auth_POST(this.URL+"follow",data,{});
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

    getFollowi

    //@GetMapping("/isfollow")
    followCheckFunction = (FollowId) => {
       return axios_auth_POST(this.URL+`isfollow/${FollowId}`,{},{});
    }
}