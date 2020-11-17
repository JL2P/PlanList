

import { observable, computed, action } from "mobx";


export default class GroupTodoStore {
    constructor(groupStore){
        this.group =groupStore;
    }

    @observable groupTodo = {}
    @observable groupTodos = []
    @observable selectedTodo = [];
    @observable comment = {}
    @observable comments = {}

    @computed get getGroupTodo(){return this.groupTodo};
    @computed get getGroupTodos(){return this.groupTodos};
    @computed get getSelectedTodo(){return this.selectedTodo};
    @computed get getComment(){return this.comment};
    @computed get getComments(){return this.comments};


    @action
    async getApiGroupTodos(groupId){

    }

}