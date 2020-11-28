import {
    axios_auth_GET,
    axios_auth_POST,
    axios_auth_PUT,
    axios_auth_DELETE,
    } from "../common/CommonAxiosModules";
    
  //Account관련 Api와 연동하는 클래스
export default class GroupPointRepository {
    //공통 적으로 사용되는 URL
    URL = "/api/points/groups/";

    //완료하면 그룹 점수 생성
    createGroupPoint = (groupPointObj) => {
        return axios_auth_POST(this.URL, groupPointObj, {});
    }

    //완료 취소하면 그룹 점수 회수(해당 유저 점수도 같이 회수)
    deleteGroupPoint = (accountId, groupId, todoId) => {
        return axios_auth_GET(this.URL+`${accountId}/${groupId}/${todoId}`);
    }

    //특정 그룹의 전체 점수를 전체 조회 
    getGroupAllPoints = (groupId) => {
        return axios_auth_GET(this.URL+`${groupId}`, []);
    }

    //모든 그룹 랭킹 전체 조회
    getGroupsAllRankings = () => {
        return axios_auth_GET(this.URL+`all/groupRanking`, []);
    }
    //특정 그룹 내 랭킹 전체 조회
    getInGroupAllRankings = (groupId) => {
        return axios_auth_GET(this.URL+`${groupId}`, []);
    }
}