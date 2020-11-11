import axios from "axios"

const HEADER = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    },
  };

//member관련 Api와 연동하는 클래스
export default class MemberRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";

    //member list 조회
    // GET / api/groups/
    memberList = () => {
        return axios.get(this.URL+ `member`,HEADER).then(request => request.data||[])
    }
    //member 조회
    // GET /api/groups/{groupId}/
    memberDetail = (memberId,groupId) =>{
        return axios.get(this.URL+`${groupId}/member/${memberId}/`,HEADER).then(request=>request.data||{})
    }

    //member 추가
    //POST /api/groups/
    memberCreate = (memberModel) => {
        return axios.post(this.URL+`${memberModel.groupId}/member`,memberModel,HEADER).then(request => request.data||[])
    }
    
    // member 수정
    // PUT /api/groups/
    memberModify = (memberModel)=>{
        return axios.put(this.URL+`${memberModel.groupId}/member`,memberModel,HEADER).then(request=>request.data||{})
    }

    //member 삭제
    // DELETE /api/groups/{groupId}
    memberDelete = (groupId,memberId) => {
        return axios.delete(this.URL+`${groupId}/member/${memberId}`,HEADER).then(request=>request.data||null)
    }   
}