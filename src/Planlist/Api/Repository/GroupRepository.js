import axios from "axios"

const HEADER = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    },
  };

//Account관련 Api와 연동하는 클래스
export default class GroupRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";

    //group list 조회
    // GET / api/group/
    groupList = () => {
        return axios.get(this.URL,HEADER).then(request => request.data||[])
    }
    //group 조회
    // GET /api/group/{groupId}/
    groupDetail = (groupId) =>{
        return axios.get(this.URL+`${groupId}/`,HEADER).then(request=>request.data||{})
    }

    //group 추가
    //POST /api/group/
    groupCreate = (GroupModel) => {
        return axios.post(this.URL,GroupModel,HEADER).then(request => request.data||[])
    }
    
    // group 수정
    // PUT /api/group/
    groupModify = (GroupModel)=>{
        return axios.put(this.URL,GroupModel,HEADER).then(request=>request.data||{})
    }
    // group 수정 그룹장 양도
    // PUT /api/group/
    groupTransfer = (GroupModel)=>{
        return axios.put(this.URL+"transfer",GroupModel,HEADER).then(request=>request.data||{})
    }

    //group 삭제
    // DELETE /api/group/{groupId}
    groupDelete = (groupId) => {
        return axios.delete(this.URL+`${groupId}/`,HEADER).then(request=>request.data||null)
    }    

}