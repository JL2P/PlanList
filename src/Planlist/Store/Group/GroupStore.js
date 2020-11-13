import { observable, computed, action } from "mobx";
import CategoryList_Data from "../../Category/CategoryList_Data";
import GroupModel from "../../Api/model/group/GroupModel";
import GroupAddModel from "../../Api/model/group/GroupAddModel";
import GroupModifyModel from "../../Api/model/group/GroupModifyModel";
import MemberModel from "../../Api/model/member/MemberModel";

import MyGroupPage_List_Data from "../../Sample/Data/GroupSample/MyGroupPage_List_Data";
import BsetGroupPage_List_Data from "../../Sample/Data/GroupSample/BsetGroupPage_List_Data";
import CategoryGroupPage_List_Data from "../../Sample/Data/GroupSample/CategoryGroupPage_List_Data";
import RecommendGroupPage_List_Data from "../../Sample/Data/GroupSample/RecommendGroupPage_List_Data";
import GroupRepository from "../../Api/Repository/GroupRepository"
import MemberRepository from "../../Api/Repository/MemberRepository"


export default class GroupStore {
    constructor(root) {
        this.root = root;
        this.groupRepository = new GroupRepository();
        this.memberRepository = new MemberRepository();
      }
      
      //샘플
      @observable myTodo = MyGroupPage_List_Data;
      @observable bestTodo = BsetGroupPage_List_Data
      @observable categoryTodo = CategoryGroupPage_List_Data;
      @observable recommendTodo = RecommendGroupPage_List_Data;

      @computed get getMyTodo(){return this.myTodo;}

      
      //모델 정의
      @observable group = {};
      @observable groups = [];
      @observable categoryList = CategoryList_Data;
      @observable select_Group_categoryList = this.categoryList[0];
      @observable detailGroup_modalOpen = false;
      //그룹 디테일에 해당되는 내용
      @observable detailGroup_memberLength = 0; 
      @observable detailGroup_memberList = [{}];
      @observable myGroups = [];
      @observable activeItem = "전체글";

      @observable member = {};
      @observable members = [];
      @observable groupId = 0;
      @observable confirm = false;
      @observable manager = false;

      @computed get getGroup(){return this.group;}
      @computed get getGroups(){return this.groups;}
      @computed get getDetailGroup_modalOpen(){return this.detailGroup_modalOpen}
      @computed get getCategoryList(){return this.categoryList}
      @computed get getSelect_Group_categoryList(){return this.select_Group_categoryList};
      @computed get getDetailGroup_memberLength(){return this.detailGroup_memberLength;}
      @computed get getDetailGroup_memberList(){return this.detailGroup_memberList;}
      @computed get getMyGroups(){return this.myGroups;}
      @computed get getActiveItem(){return this.activeItem;}

      @computed get getMember(){return this.member;}
      @computed get getMembers(){return this.members;}
      @computed get getGroupId(){return this.groupId;}
      @computed get getConfirm(){return this.confirm;}
      @computed get getManager(){return this.manager;}
      

      //modal open & close
      @action
      detailGroup_modalCheck = (check) => {
        this.detailGroup_modalOpen = check
      }

      //그룹에 게시물 생성
      @action
      detailGroup_create = (detailGroup) => {
        this.myTodo.push(detailGroup)
        this.detailGroup_modalCheck(false);
      }

      //카테고리 리스트별로 출력
      @action
      categoryList_select = (item) => {
        this.select_Group_categoryList = item
      }

      //그룹 전체 리스트 출력
      @action
      async getApiGroups(){
        console.log("getApiGroups")
        const apiGetGroups = await this.groupRepository.groupList();
        this.groups = apiGetGroups.map(group => new GroupModel(group))
        console.log(this.groups);

        //로컬스토리지에 내 그룹 저장 // object를 저장하는 방법
        localStorage.setItem('myGroups', JSON.stringify(this.myGroups));
      }

      //그룹 생성
      @action
      async createGroup(groupObj){
        const groupModel = new GroupAddModel(groupObj);
        const result = await this.groupRepository.groupCreate(groupModel);
        
        let today = new Date();   

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let day = today.getDay();  // 요일

        const newToday = `${year}.${month}.${date}`

        this.groupId = result.id;
        const accountId = result.master;
        this.confirm = true;
        this.manager = true;
        const newMember = {
                            "accountId":accountId,
                            "confirm": this.confirm,
                            "groupId": this.groupId,
                            "manager": this.manager,
                            "date": newToday
                          }

        this.getApiGroups()
        //생성시 그룹 관리자 생성
        this.groupMember(newMember).then(res=>{
          //생성시 해당 그룹으로 연결
          this.groupDetail_page(result.id,accountId);
        });
        
      }

      //그룹 디테일 조회
      @action
      async groupDetail_page(groupId,accountId){
        const result = await this.groupRepository.groupDetail(groupId);
        this.group = new GroupModel(result);

        this.detailGroup_memberLength = this.group.members.length;
        this.detailGroup_memberList = this.group.members;
        console.log(this.detailGroup_memberList)

        let memberList = this.detailGroup_memberList.map(member => 
          (accountId === member.accountId && member)
        )
        for(var i = 0; i< memberList.length; i++){
          if(memberList[i]){
            this.member = memberList[i]
          }
        }
        //로컬스토리지에 그룹아이디 저장
        localStorage.groupId = groupId

        
      }

      //그룹 디테일 페이지 설정 수정
      @action
      async settingSave(groupObj){
        const groupModel = new GroupModifyModel(groupObj);
        console.log(groupModel)
        await this.groupRepository.groupModify(groupModel);
      }
      //그룹 디테일 페이지 설정에서 그룹 삭제
      @action
      async settingRemove(groupId){
        await this.groupRepository.groupDelete(groupId)
      }

      //내 그룹을 로컬스토리지에서 호출
      @action
      myGroups_array(myGroups){
        console.log(myGroups)
        this.myGroups = myGroups;
      }

      //그룹 디테일 내비게이션
      handleItemClick(name){
        this.activeItem = name;
        localStorage.name = name;
      }

      /*****************************************멤버 관련*********************************************/
      //그룹원 생성
      @action
      async groupMember(memberObj){
        console.log(memberObj)
        const memberModel = new MemberModel(memberObj);
        console.log(memberModel);
        await this.memberRepository.memberCreate(memberModel);
      }

      //그룹원 신청 확인
      @action
      async memberApply(memberObj){
        const memberModel = new MemberModel(memberObj);
        await this.memberRepository.memberModify(memberModel);
      }

      //멤버 제거
      @action
      async memberRemove(groupId,memberId){
        const result = await this.memberRepository.memberDelete(groupId,memberId);
        console.log(result);
      }

      //멤버 전체 리스트
      @action
      async memberListAll(){
        console.log("멤버 전체 리스트 출력")
        const memberList = await this.memberRepository.memberList();
        this.members = memberList.map(member => new MemberModel(member))
      }
}