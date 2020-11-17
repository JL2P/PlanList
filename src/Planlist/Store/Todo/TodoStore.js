import { observable, computed, action } from "mobx";
import TodoRepository from "../../Api/Repository/TodoRepository";
import CommentRepository from "../../Api/Repository/CommentRepository";

import TodoModifyModel from "../../Api/model/todo/TodoModifyModel";
import TodoAddModel from "../../Api/model/todo/TodoAddModel";
import TodoModel from "../../Api/model/todo/TodoModel";

//테스트용 추가 -승훈-
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import {
  CommentAddModel,
  CommentModel,
} from "../../Api/model/comment/CommentModels";
import { SubCommentAddModel,SubCommentModel } from "../../Api/model/comment/SubCommentModels";
import FollowRepository from '../../Api/Repository/FollowRepository';

export default class TodoStore {
  constructor(root) {
    this.root = root;
    this.todoRepository = new TodoRepository();
    this.commentRepository = new CommentRepository();
    this.followRepository = new FollowRepository();
  }

  //모델 정의
  @observable todos = [];
  @observable todo = {};
  @observable allTodos = [];
  @observable selectTodos = [];
  @observable loginTodos = [];
  @observable comment = {};
  @observable comments = [];

  @observable today = {}; // 오늘 날짜 : 년-월-일

  @computed get getTodo() {
    return this.todo;
  }

  @computed get getTodos() {
    return this.todos;
  }

  @computed get getAllTodos() {
    return this.allTodos;
  }

  @computed get getSelectTodos() {
    return this.selectTodos;
  }

  @computed get getLoginTodos() {
    return this.loginTodos;
  }

  @computed get getComment() {
    return this.comment;
  }

  @computed get getComments() {
    return this.comments;
  }

  @computed get getTodosFrame() {
    //Frame Column갯수
    const columns = 3;

    //메인화면에서 보여지는 column수에 따라 frame갯수 나누기
    const frame = [...Array(columns).keys()].map((_) => []);

    //각 frame에 item넣어주기
    for (let i = 0; i < this.todos.length; i++) {
      frame[Math.floor(i % columns)].push(this.todos[i]);
    }

    /*
    데이터 형태
    frame = [
      [TodoModel,TodoModel,TodoModel...],
      [TodoModel,TodoModel,TodoModel...],
      [TodoModel,TodoModel,TodoModel...]
    ]
    */
    return frame;
  }

  @computed get getToday() {
    const today_date = new Date(); // 현재 날짜 받아오기
    console.log("오늘은?", today_date);
    const year = today_date.getFullYear();
    const month = (today_date.getMonth() + 1).toString().padStart(2, "0"); // 1월 : 0
    const date = today_date.getDate().toString().padStart(2, "0"); // 날짜
    return year + "-" + month + "-" + date;
  }

  @action
  setTodos(todos) {
    this.todos = todos;
  }

  @action
  setTodo(todo) {
    this.todo = todo;
  }

  @action
  setComment(comment) {
    this.comment = comment;
  }

  @action
  setComments(comments) {
    this.comments = comments;
  }

  // API를 호출하여 todos에 todo리스트 데이터를 넣어준다.
  @action
  async getApiTodos() {
    const followings = await this.followRepository.getMyFollowinglistFunction();
    const apiGetTodos = await this.todoRepository.TodoList(followings.map(follow=>follow.accountId));
    this.todos = apiGetTodos.map((todo) => new TodoModel(todo));
  }

  @action
  async getApiAllTodos() {
    const allTodos = await this.todoRepository.TodoAll();
    this.allTodos = allTodos.map((todo) => new TodoModel(todo));
  }

  @action
  async getApiSelectTodos(selectId) {
    const selectTodos = await this.todoRepository.selectTodoList(selectId);
    this.selectTodos = selectTodos.map((todo) => new TodoModel(todo));
  }

  @action
  async getApiLoginTodos() {
    const loginTodos = await this.todoRepository.loginTodoList();
    this.loginTodos = loginTodos.map((todo) => new TodoModel(todo));
  }

  // API를 호출하여 todo데이터를 저장한다.
  @action
  async saveTodo(todoObj) {
    const todoModel = new TodoAddModel(todoObj);
    todoModel.writer = this.root.account.getLoginAccount.accountId;
    await this.todoRepository.todoCreate(todoModel);
    this.getApiTodos();
  }

  // API를 호출하여 todo데이터를 수정한다.
  @action
  async modifyTodo(todoObj) {
    const todoModel = new TodoModifyModel(todoObj);
    await this.todoRepository.todoUpdate(todoModel);
    this.getApiTodos();
  }

  // API를 호출하여 todo데이터를 삭제한다.
  @action
  async deleteTodo(todoId) {
    await this.todoRepository.todoDelete(todoId);
    const newMaintodo = this.todos.filter((todo) => todo.todoId !== todoId);
    this.todos = newMaintodo;
  }

  // API를 호출하여 해당 todo의 댓글을 생성한다.
  @action
  async addComment(todoId, commentObj) {
    const commentModel = new CommentAddModel(commentObj);
    commentModel.writer = this.root.account.getLoginAccount.accountId;

    const data = await this.commentRepository.commentCreate(todoId, commentModel);
    const newComment = new CommentModel(data);
    const comments = this.comments.slice('');
    comments.push(newComment)
    this.comments = comments;

    this.getApiTodos();
  }

  // API를 호출하여 해당 댓글의 대댓글을 생성한다.
  @action
  async addSubComment(todoId, commentId, subCommentObj) {
    const subCommentAddModel = new SubCommentAddModel(subCommentObj);
    subCommentAddModel.writer = this.root.account.getLoginAccount.accountId;

    const data = await this.commentRepository.subCommentCreate(
      todoId,
      commentId,
      subCommentAddModel
    );
    const newSubComment = new SubCommentModel(data);

    this.comments = this.comments.map(comment=>{
      if(comment.commentId === commentId){
        const subComments = comment.subComments;
        subComments.push(newSubComment);
        comment.subComments = subComments;        
      }
      return comment;
    });

    this.getApiTodos();
  }

  // API를 호출하여 해당 댓글 삭제
  @action
  async deleteComment(comment){
    const todoId = this.todo.todoId;
    const commentId = comment.commentId;
    this.commentRepository.commentDelete(todoId, comment.commentId);
    this.comments = this.comments.filter(comment=>comment.commentId!==commentId);

    this.getApiTodos();
  }

  // API를 호출하여 해당 대댓글 삭제
  @action
  async deleteSubComment(subComment){
    const todoId = this.todo.todoId;
    const commentId = subComment.commentId;
    const subCommentId = subComment.subCommentId;

    this.commentRepository.subCommentDelete(todoId, commentId ,subCommentId)
    this.comments = this.comments.map(comment=>{
      if(comment.commentId === commentId){
        comment.subComments = comment.subComments.filter(subComment => subComment.subCommentId !==subCommentId)
      }
      return comment;
    });

    this.getApiTodos();
  }


  // API를 호출하여 Todo의 좋아요 누름
  @action
  async addLike(todoId) {
    this.todoRepository.onLike(todoId);
    this.todos = this.todos.map((todo) => {
      if (todo.todoId === todoId) {
        todo.likeState = true;
        todo.likePoint += 1;
      }
      return todo;
    });
  }

  // // API를 호출하여 Todo의 좋아요 취소
  @action
  async removeLike(todoId) {
    this.todoRepository.cancelLike(todoId);
    this.todos = this.todos.map((todo) => {
      if (todo.todoId === todoId) {
        todo.likeState = false;
        todo.likePoint = todo.likePoint === 0 ? 0 : (todo.likePoint -= 1);
      }
      return todo;
    });
  }

  @action
  async todoCompleted(todoId) {
    await this.todoRepository.completeTodo(todoId);
    this.getApiLoginTodos();
  }

  @action
  async todoIncompleted(todoId) {
    await this.todoRepository.incompleteTodo(todoId);
    this.getApiLoginTodos();
  }
}
