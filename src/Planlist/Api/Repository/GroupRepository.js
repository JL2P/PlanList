import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class GroupRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";

    //group list 조회
    // GET / api/group/
    groupList = () => {
        return axios.get(this.URL).then(request => request.data||[])
    }
    //group 조회
    // GET /api/group/{groupId}/
    groupDetail = (groupId) =>{
        return axios.get(this.URL+`${groupId}/`).then(request=>request.data||{})
    }

    //group 추가
    //POST /api/group/
    groupCreate = (GroupModel) => {
        return axios.post(this.URL,GroupModel).then(request => request.data||[])
    }

}