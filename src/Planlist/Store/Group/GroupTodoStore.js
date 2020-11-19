

import { observable, computed, action } from "mobx";
import { GroupTodoAddModel, GroupTodoModel } from '../../Api/model/GroupTodo/GroupTodoModels';
import GroupTodoRepository from "../../Api/Repository/GroupTodoRepository"
import GroupTodoCommentRepository from "../../Api/Repository/GroupTodoCommentRepository"
import { GroupTodoCommentAddModel, GroupTodoCommentModel } from '../../Api/model/GroupTodo/GroupTodoCommentModels';
import { GroupTodoSubCommentAddModel, GroupTodoSubCommentModel } from '../../Api/model/GroupTodo/GroupTodoSubCommentModels';
import TodoAddModel from '../../Api/model/todo/TodoAddModel';
import TodoRepository from '../../Api/Repository/TodoRepository';
import TodoModel from '../../Api/model/todo/TodoModel';

export default class GroupTodoStore {
    constructor(groupStore){
        this.group = groupStore;
        this.groupTodoRepository = new GroupTodoRepository();
        this.groupTodoCommentRepository = new GroupTodoCommentRepository();
        this.todoRepository = new TodoRepository();
    }

    @observable groupTodo = {}
    @observable groupTodos = []
    @observable selectedTodo = [];
    @observable comments = {}
    @observable groupTodoAttendAt = false;

    @computed get getGroupTodo(){return this.groupTodo};
    @computed get getGroupTodos(){return this.groupTodos};
    @computed get getGroupTodoComments(){return this.comments};
    @computed get getGroupTodoAttendAt(){return this.groupTodoAttendAt};

    @action setGroupTodo(groupTodo){
      const grouptodo = new GroupTodoModel(groupTodo)
      this.groupTodo = grouptodo
      this.comments = grouptodo.comments
    }


    //Group의 GroupTodoList데이터 호출
    @action
    async getApiGroupTodos(groupId){
        const groupTodoList = await this.groupTodoRepository.groupTodos(groupId);
        this.groupTodos = groupTodoList.map(groupTodo => new GroupTodoModel(groupTodo))
    }

    //GroupTodo 생성
    @action
    async addGroupTodo(groupTodoObj){
      const grouptodoAddModel = new GroupTodoAddModel(groupTodoObj);
      await this.groupTodoRepository.createGroupTodo(grouptodoAddModel);
      //groupStore에 있는 함수 실행
      this.group.detailGroup_modalCheck(false);
    }

    //GroupTodo 수정
    @action
    async modifyGroupTodo(groupTodoObj){}

    //GroupTodo 삭제
    @action
    async deleteGroupTodo(groupTodoObj){}


    //GroupTodo Comment생성
    @action
    async addGroupTodoComment(groupId,todoId,groupTodoCommentObj){
      const groupTodoCommentAddModel = new GroupTodoCommentAddModel(groupTodoCommentObj);
      groupTodoCommentAddModel.writer = this.group.root.account.getLoginAccount.accountId;

      const data = await this.groupTodoCommentRepository.createGroupTodoComment(groupId,todoId,groupTodoCommentAddModel);

      const newComment = new GroupTodoCommentModel(data);
      const comments = this.comments.slice('');
      comments.push(newComment)
      this.comments = comments;

      this.getApiGroupTodos(groupId)
    }

    //GroupTodo Comment삭제
    @action
    async deleteGroupTodoComment(groupId, todoId, comment){
      const commentId = comment.commentId;
      this.groupTodoCommentRepository.deleteGroupTodoComment(groupId, todoId, commentId);

      this.comments = this.comments.filter(comment=>comment.commentId!==commentId);

      this.getApiGroupTodos(groupId)
    }

    //GroupTodo SubComment생성
    @action
    async addGroupTodoSubComment(groupId, todoId, commentId, groupTodoSubCommentObj){
      const groupTodoSubCommentAddModel = new GroupTodoSubCommentAddModel(groupTodoSubCommentObj);
      groupTodoSubCommentAddModel.writer = this.group.root.account.getLoginAccount.accountId;

      const data = await this.groupTodoCommentRepository.createGroupTodoSubComment(groupId,todoId,commentId,groupTodoSubCommentAddModel);

      const newSubComment = new GroupTodoSubCommentModel(data);

      this.comments = this.comments.map(comment=>{
        if(comment.commentId === commentId){
          const subComments = comment.subComments;
          subComments.push(newSubComment);
          comment.subComments = subComments;        
        }
        return comment;
      });

      this.getApiGroupTodos(groupId)
    }

    //GroupTodo SubComment삭제
    @action
    async deleteGroupTodoSubComment(groupId, todoId, subComment){
      const commentId = subComment.commentId;
      const subCommentId = subComment.subCommentId;
      this.groupTodoCommentRepository.deleteGroupTodoSubComment(groupId, todoId, commentId, subCommentId);

      this.comments = this.comments.map(comment=>{
        if(comment.commentId === commentId){
          comment.subComments = comment.subComments.filter(subComment => subComment.subCommentId !==subCommentId)
        }
        return comment;
      });

      this.getApiGroupTodos(groupId)
    }

      
  // API를 호출하여 Todo의 좋아요 누름
  @action
  async addLike(groupTodoId) {
    //API호출
    this.groupTodoRepository.onLike(groupTodoId);
    //리액트 Store데이터 변경
    this.groupTodos = this.togroupTodosdos.map((groupTodo) => {
      if (groupTodo.todoId === groupTodoId) {
        groupTodo.likeState = true;
        groupTodo.likePoint += 1;
      }
      return groupTodoId;
    });
  }

  // // API를 호출하여 Todo의 좋아요 취소
  @action
  async removeLike(groupTodoId) {
    //API호출
    this.groupTodoRepository.cancelLike(groupTodoId);
    //리액트 Store데이터 변경
    this.groupTodos = this.groupTodos.map((groupTodo) => {
      if (groupTodo.todoId === groupTodoId) {
        groupTodo.likeState = false;
        groupTodo.likePoint = groupTodo.likePoint === 0 ? 0 : (groupTodo.likePoint -= 1);
      }
      return groupTodo;
    });
  }


  //현재 GroupTodo에 참여중인지 체크
  @action
  async checkAttend(groupTodo){
    const groupId = groupTodo.groupId;
    const groupTodoId = groupTodo.groupTodoId;
    const data = await this.groupTodoRepository.checkGroupTodoMember(groupId, groupTodoId);
    // (ATTEND 참여중 / NONE 미참여) 
    if(data === "ATTEND"){
      this.groupTodoAttendAt = true;
    }else{
      this.groupTodoAttendAt = false;
    }
  }


  @action
  async attendGroupTodo(){
    const groupId = this.groupTodo.groupId;
    const groupTodoId = this.groupTodo.groupTodoId;    
    const data = await this.groupTodoRepository.checkGroupTodoMember(groupId, groupTodoId)
    // (ATTEND 참여중 / NONE 미참여) 
    if(data === "NONE"){
      const todoModel = new TodoAddModel({...this.groupTodo});
      todoModel.groupAt = "Y";
      todoModel.endTime=this.getTomorrow();
      todoModel.writer = this.group.root.account.getLoginAccount.accountId;

      // Todo추가
      const data = await this.todoRepository.todoCreate(todoModel);
      const newTodo = new TodoModel(data);

      // GroupTodoMember에 추가
      this.groupTodoRepository.addGroupTodoMember(groupId, groupTodoId, newTodo.todoId);
      return true;
    }
    return false;
}

  @action
  async cancelGroupTodo(){
    const groupId = this.groupTodo.groupId;
    const groupTodoId = this.groupTodo.groupTodoId;  
    // GroupTodoMember에서 제거
    const data = await this.groupTodoRepository.deleteGroupTodoMember(groupId, groupTodoId);
    const todoId = data.todoId;
    // todo삭제
    this.todoRepository.todoDelete(todoId);
  }

  getTomorrow=()=> {

    var d = new Date();
    var s =
        this.leadingZeros(d.getFullYear(), 4) + '-' +
        this.leadingZeros(d.getMonth() + 1, 2) + '-' +
        this.leadingZeros(d.getDate()+1, 2);

    return s;
  }

  leadingZeros=(n, digits)=> {

      var zero = '';
      n = n.toString();

      if (n.length < digits) {
          for (let i = 0; i < digits - n.length; i++)
              zero += '0';
      }
      return zero + n;
  }
}