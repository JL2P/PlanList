import { observable, computed, action } from "mobx";
import CategoryList_Data from "../../Category/CategoryList_Data";
import GroupModel from "../../Api/model/group/GroupModel";
import GroupAddModel from "../../Api/model/group/GroupAddModel";
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
      @observable detailGroup_open ={};

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
        await this.groupRepository.groupCreate(groupModel);
        this.getApiGroups()
      }

      //그룹 디테일 조회
      @action
      async groupDetail_page(groupId){
        const result = await this.groupRepository.groupDetail(groupId);
        this.detailGroup_open = new GroupModel(result);
        console.log(this.detailGroup_open)
      }
}