import { observable, computed, action } from "mobx";
import MyGroupPage_List_Data from "../../Sample/Data/GroupSample/MyGroupPage_List_Data";
import GroupRepository from "../../Api/Repository/GroupRepository"


export default class GroupStore {
    constructor(root) {
        this.root = root;
        this.groupRepository = new GroupRepository();
      }
    
      @observable myTodo = MyGroupPage_List_Data;

      @computed get getMyTodo(){
        return this.myTodo
      }
      

}