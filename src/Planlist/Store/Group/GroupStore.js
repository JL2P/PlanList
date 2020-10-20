import { observable, computed, action } from "mobx";
import GroupPage_List_Data from "../../Sample/Data/GroupPage_List_Data";
import GroupRepository from "../../Api/Repository/GroupRepository"


export default class GroupStore {
    constructor(root) {
        this.root = root;
        this.groupRepository = new GroupRepository();
      }
    
      @observable myTodo = GroupPage_List_Data;

      @computed get getMyTodo(){
        return this.myTodo
      }
      

}