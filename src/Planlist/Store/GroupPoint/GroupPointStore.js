import { observable, computed, action } from "mobx";
import GroupPointRepository from "../../Api/Repository/GroupPointRepository";
import GroupRepository from "../../Api/Repository/GroupRepository";
import GroupPointAddModel from "../../Api/model/groupPoint/GroupPointAddModel";
import GroupPointModel from "../../Api/model/groupPoint/GroupPointModel";
import GroupRankModel from "../../Api/model/groupPoint/GroupRankModel";
import InGroupRankModel from "../../Api/model/groupPoint/InGroupRankModel";
import { map } from "highcharts";
import GroupModel from "../../Api/model/group/GroupModel";
import GroupTodoRepository from "../../Api/Repository/GroupTodoRepository";

export default class GroupPointStore {

    constructor(root) {
        this.root = root;
      
        this.groupPointRepository = new GroupPointRepository();
        this.groupRepository = new GroupRepository();
        this.groupTodoRepository = new GroupTodoRepository();

    }
    //그룹의 모든 점수 리스트
    @observable groupPoints = [];

    @observable groupTodayPoint = 0;
    @observable groupTotalPoint = 0;

    //그룹 랭킹 리스트
    @observable groupRanks = [];
    @observable inGroupRanks = [];
    @observable groupRank = {};
    @observable inGroupRank = {};

    

    @computed get getGroupRanks() {
        return this.groupRanks;
      }
    @computed get getGroupRank() {
        return this.groupRank;
    }

    @computed get getInGroupRanks() {
        return this.ingroupRanks;
    }

    @computed get getInGroupRank() {
        return this.ingroupRanks;
    }
    
    @computed get getGroupPoints() {
        return this.groupPoints;
    }

    @computed get getGroupTodayPoints() {
        return this.groupTodayPoint;
    }

    //완료하면 그룹 점수 추가
    @action 
    async addGroupPoint(groupPointObj) {
        const group = await this.groupTodoRepository.getGroupTodoGroupInfo(groupPointObj.todoId);
        console.log(group)
        const groupPointAddModel = new GroupPointAddModel(groupPointObj);
        groupPointAddModel.groupId = group.id;
        console.log(groupPointAddModel)
        this.groupPointRepository.createGroupPoint(groupPointAddModel);
    }

    //완료 취소하면 그룹 점수 회수(해당 유저 점수도 같이 회수)
    @action
    async deleteGroupPoint (accountId, groupId, todoId) {
        await this.groupPointRepository.deleteGroupPoint(accountId, groupId, todoId);
    }

    //특정 그룹의 전체 점수를 전체 조회
    @action
    async getGroupAllPoints (groupId) {
        const groupPointData = await this.groupPointRepository.getGroupAllPoint(groupId);
        this.groupPoints = groupPointData.map((groupPoint) =>  new GroupPointModel(groupPoint));
    }

    //모든 그룹 랭킹 전체 조회
    @action
    async groupsAllRankings () {
        const groupRankingData = await this.groupPointRepository.getGroupsAllRankings();
        const groupRankingGroupMappingDatas = await this.groupRepository.groupPointMappingToGroup(groupRankingData);

        this.groupRanks = groupRankingGroupMappingDatas.map((item)=> new GroupRankModel(item));

         console.log(this.groupRanks);
    }

    //특정 그룹 내 랭킹 전체 조회
    @action
    async getInGroupAllRankings (groupId) {
        const inGroupRankData = await this.groupPointRepository.getInGroupAllRankings(groupId);
        this.ingroupRanks = inGroupRankData.map((inGroupRank) => new InGroupRankModel(inGroupRank));
    }


    //그룹 ID로 그룹 객체를 가지고오는 예제
    //TodoStore.js 132번째 줄 getApiTodos 함수에 동일한 내용이 있다.
    //다른사람들 소스를 많이 참고해보자 프론트부터 백엔드까지 어떻게 데이터가 흘러가는지
    @action
    async testGroupAllRankings(){
        //Point서비스 내에서는 그룹에대한 정보인 그룹객체를 가져올 수 가 없다.
        //그리고 우리가 만들어야하는 기간이 너무 짧기때문에 메세지큐등, MSA구조로 프로젝트를 구성했을때,
        //각기 다른 서비스간 데이터를 주고받는 기능을 구현하지 못했다.
        //그래서 다른 서비스의 데이터가 필요한 경우에는 프론트엔드에서 처리하기로 결정했었었고,
        //지금과같은 경우는 프론트엔드에서 여러 서버에 데이터를 요청하는방법으로 이를 해결하고있다.

        //1. Point서비스에서 데이터를 받아온다.
        const groupRankings = await this.groupPointRepository.getGroupsAllRankings();
        
        //2. Point서비스에서 받아온 데이터중에서 Group객체(name도 안에 있음)에 대한 정보가 필요하다.
        //   다행히 GroupId의 정보는 가지고 있기 때문에, GroupId가지고 Group서비스를 통해
        //   그룹 객체를 가져올 수 있다.
        const groupRankingGroupMappingDatas = await this.groupRepository.groupPointMappingToGroup(groupRankings);

        //3. 이후 동일하게 진행
        //   GroupRankModel안에 Group객체를 담을 수 있도록 GroupModel를 추가했다.
        const results = groupRankingGroupMappingDatas.map((item)=> new GroupRankModel(item));
        console.log("GroupPoint에 Group데이터 추가 된것 확인");
        console.log(results)
        results.forEach(groupRankModel => {
            console.log("GroupName = "+groupRankModel.groupModel.title)
        });
        //4. 결과를보면 Group객체를 가지고온것을 확인할 수 있다.
    }

}
