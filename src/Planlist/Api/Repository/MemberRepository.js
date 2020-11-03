import axios from "axios"

//member관련 Api와 연동하는 클래스
export default class MemberRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";

    //member list 조회
    // GET / api/groups/
    memberList = () => {
        return axios.get(this.URL).then(request => request.data||[])
    }
    //member 조회
    // GET /api/groups/{groupId}/
    memberDetail = (memberId) =>{
        return axios.get(this.URL+`${memberId}/`).then(request=>request.data||{})
    }

    //member 추가
    //POST /api/groups/
    memberCreate = (memberModel) => {
        return axios.post(this.URL,memberModel).then(request => request.data||[])
    }
    
    // member 수정
    // PUT /api/groups/
    meberModify = (memberModel)=>{
        return axios.put(this.URL,memberModel).then(request=>request.data||{})
    }

    //member 삭제
    // DELETE /api/groups/{groupId}
    memberDelete = (memberId) => {
        return axios.delete(this.URL+`${memberId}/`).then(request=>request.data||null)
    }   
}