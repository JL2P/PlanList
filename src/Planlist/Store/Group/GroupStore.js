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

      
      //모델 정의
      @observable group = {};
      @observable groups = [];
      @observable categoryList = CategoryList_Data;
      @observable select_Group_categoryList = this.categoryList[0];
      @observable detailGroup_modalOpen = false;
      @observable detailGroup_open ={};  //그룹 디테일에 해당되는 객체
      @observable detailGroup_memberLength = 0; 
      @observable detailGroup_memberList = [{}];

      @observable member = {};
      @observable members = [];
      @observable confirm = false;
      @observable manager = false;

      @computed get getGroup(){return this.group;}
      @computed get getGroups(){return this.groups;}
      @computed get getDetailGroup_modalOpen(){return this.detailGroup_modalOpen}
      @computed get getCategoryList(){return this.categoryList}
      @computed get getSelect_Group_categoryList(){return this.select_Group_categoryList};
      @computed get getDetailGroup_open(){return this.detailGroup_open;}
      @computed get getDetailGroup_memberLength(){return this.detailGroup_memberLength;}
      @computed get getDetailGroup_memberList(){return this.detailGroup_memberList;}

      @computed get getMember(){return this.member;}
      @computed get getMembers(){return this.members;}
      

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
      }

      //그룹 생성
      @action
      async createGroup(groupObj){
        const groupModel = new GroupAddModel(groupObj);
        console.log(groupObj);
        const result = await this.groupRepository.groupCreate(groupModel);
        console.log(result)

        const groupId = result.id;
        const accountId = result.master;
        this.confirm = true;
        this.manager = true;
        const newMember = {
                            "accountId":accountId,
                            "confirm": this.confirm,
                            "groupId": groupId,
                            "manager": this.manager,
                          }

        this.getApiGroups()
        //생성시 해당 그룹으로 연결
        this.groupDetail_page(result.id)
        //생성시 멤버 생성
        this.masterMember(newMember);
      }

      //그룹 디테일 조회
      @action
      async groupDetail_page(groupId){
        const result = await this.groupRepository.groupDetail(groupId);
        this.detailGroup_open = new GroupModel(result);
        this.detailGroup_memberLength = this.detailGroup_open.members.length;
        this.detailGroup_memberList = this.detailGroup_open.members;
        console.log(this.detailGroup_memberList)
        console.log(this.detailGroup_memberLength)
      }

      //그룹 디테일 페이지 설정 저장
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

      /*****************************************멤버 관련*********************************************/
      @action
      async masterMember(memberObj){
        console.log("멤버 스토어 : " + memberObj);
        const memberModel = new MemberModel(memberObj);
        console.log(memberModel);
        await this.memberRepository.memberCreate(memberModel);
      }
      
}