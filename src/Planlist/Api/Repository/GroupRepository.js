import axios from "axios"
import {axios_auth_POST } from "../common/CommonAxiosModules"

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


    //GroupRankModel에 대한 데이터를 보내주면 GroupId를 가지고 Group객체를 보내줌
    //GroupRankModel는 그냥 데이터 형식이라고 생각하면된다 Point Service의 Dto랑 매핑이 되는 객체
    groupPointMappingToGroup = (GroupRankModelList)=>{
        const groupRankGroupDtos = GroupRankModelList;
        //GroupService백엔드에 매핑할 수 있는 controller와 dto를 추가한다.
        //그룹서비스 GroupController 117번라인
        const url = this.URL +"/groupRank/mapping" 
        return axios_auth_POST(url, groupRankGroupDtos,[])
    }
}