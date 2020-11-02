import { observable, computed, action } from "mobx";
import CategoryList_Data from "../../Category/CategoryList_Data";
import GroupModel from "../../Api/model/group/GroupModel";
import GroupAddModel from "../../Api/model/group/GroupAddModel";
import GroupModifyModel from "../../Api/model/group/GroupModifyModel";

import MyGroupPage_List_Data from "../../Sample/Data/GroupSample/MyGroupPage_List_Data";
import BsetGroupPage_List_Data from "../../Sample/Data/GroupSample/BsetGroupPage_List_Data";
import CategoryGroupPage_List_Data from "../../Sample/Data/GroupSample/CategoryGroupPage_List_Data";
import RecommendGroupPage_List_Data from "../../Sample/Data/GroupSample/RecommendGroupPage_List_Data";
import GroupRepository from "../../Api/Repository/GroupRepository"


export default class GroupStore {
    constructor(root) {
        this.root = root;
        this.groupRepository = new GroupRepository();
      }
      
      //샘플
      @observable myTodo = MyGroupPage_List_Data;
      @observable bestTodo = BsetGroupPage_List_Data
      @observable categoryTodo = CategoryGroupPage_List_Data;
      @observable recommendTodo = RecommendGroupPage_List_Data;

      //샘플
      @computed get getMyTodo(){return this.myTodo}
      @computed get getBestTodo(){return this.bestTodo}
      @computed get getCategoryTodo(){return this.categoryTodo}
      @computed get getRecommendTodo(){return this.recommendTodo}
      
      //모델 정의
      @observable group = {};
      @observable groups = [];
      @observable categoryList = CategoryList_Data;
      @observable select_Group_categoryList = this.categoryList[0];
      @observable detailGroup_modalOpen = false;
      @observable detailGroup_open ={};  //그룹 디테일에 해당되는 객체

      @computed get getGroup(){return this.group;}
      @computed get getGroups(){return this.groups;}
      @computed get getDetailGroup_modalOpen(){return this.detailGroup_modalOpen}
      @computed get getCategoryList(){return this.categoryList}
      @computed get getSelect_Group_categoryList(){return this.select_Group_categoryList};
      @computed get getDetailGroup_open(){return this.detailGroup_open;}
      

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
        this.getApiGroups()
        //생성시 해당 그룹으로 연결
        this.groupDetail_page(result.id)
      }

      //그룹 디테일 조회
      @action
      async groupDetail_page(groupId){
        const result = await this.groupRepository.groupDetail(groupId);
        this.detailGroup_open = new GroupModel(result);
        console.log(this.detailGroup_open)
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
      
}