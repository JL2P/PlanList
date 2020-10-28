import { observable, computed, action } from "mobx";
import CategoryList_Data from "../../Category/CategoryList_Data";
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
    
      @observable myTodo = MyGroupPage_List_Data;
      @observable bestTodo = BsetGroupPage_List_Data
      @observable categoryTodo = CategoryGroupPage_List_Data;
      @observable recommendTodo = RecommendGroupPage_List_Data;
      @observable categoryList = CategoryList_Data;
      @observable select_Group_categoryList = {name:"all",text:"전체 그룹"};
      @observable detailGroup_modalOpen = false;

      @computed get getMyTodo(){return this.myTodo}
      @computed get getBestTodo(){return this.bestTodo}
      @computed get getCategoryTodo(){return this.categoryTodo}
      @computed get getRecommendTodo(){return this.recommendTodo}
      @computed get getDetailGroup_modalOpen(){return this.detailGroup_modalOpen}
      @computed get getCategoryList(){return this.categoryList}
      @computed get getSelect_Group_categoryList(){return this.select_Group_categoryList};



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

      //그룹 생성
      @action
      createGroup = (createObj) => {
        this.myTodo.push(createObj)
        console.log(this.myTodo)
      }

}