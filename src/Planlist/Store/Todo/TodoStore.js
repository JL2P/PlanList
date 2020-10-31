import { observable, computed, action } from "mobx";
import TodoRepository from "../../Api/Repository/TodoRepository";
import CommentRepository from "../../Api/Repository/CommentRepository";

import TodoModifyModel from "../../Api/model/todo/TodoModifyModel";
import TodoAddModel from "../../Api/model/todo/TodoAddModel";
import TodoModel from "../../Api/model/todo/TodoModel";


//테스트용 추가 -승훈-
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import { CommentAddModel } from '../../Api/model/comment/CommentModels'

export default class TodoStore {
  constructor(root) {
    this.root = root;
    this.todoRepository = new TodoRepository();
    this.commentRepository = new CommentRepository();
  }

  //모델 정의
  @observable todos = [];
  @observable todo = {};
  @observable comments = [];

  @observable today = {}; // 오늘 날짜 : 년-월-일

  @computed get getTodo() {
    return this.todo;
  }

  @computed get getTodos() {
    return this.todos;
  }

  @computed get getComments() {
    return this.comments;
  }

  @computed get getTodosFrame() {
    //Frame Column갯수
    const columns =3
    
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
    const year = today_date.getFullYear();
    const month = today_date.getMonth() + 1; // 1월 : 0
    const date = today_date.getDate(); // 날짜
    return year + "-" + month + "-" + date;
  }

  @action
  setTodos(todos){
    this.todos=todos;
  }

  @action
  setTodo(todo){
    this.todo=todo;
  }

  @action
  setComments(comments){
    this.comments=comments;
  }


  // API를 호출하여 todos에 todo리스트 데이터를 넣어준다.
  @action 
  async getApiTodos() {
    const apiGetTodos = await this.todoRepository.TodoList();
    this.todos = apiGetTodos.map(todo=>new TodoModel(todo));
  }

  // API를 호출하여 todo데이터를 저장한다.
  @action
  async saveTodo(todoObj) {
    const todoModel = new TodoAddModel(todoObj);
    await this.todoRepository.todoCreate(todoModel);
    this.getApiTodos();
  }

  // API를 호출하여 todo데이터를 수정한다.
  @action
  async modifyTodo(todoObj) {
    const todoModel = new TodoModifyModel(todoObj);
    console.log(todoModel)
    await this.todoRepository.todoUpdate(todoModel);
    this.getApiTodos();
  }

  // API를 호출하여 todo데이터를 삭제한다.
  @action
  async deleteTodo(todoId) {
    await this.todoRepository.todoDelete(todoId);
    const newMaintodo = this.todos.filter(todo => todo.todoId!==todoId)
    this.todos = newMaintodo;
  }


  // API를 호출하여 해당 todo의 댓글을 생성한다.
  @action
  async addComment(todoId, commentObj){
    const commentModel = new CommentAddModel(commentObj)
    await this.commentRepository.commentCreate(todoId, commentModel);
  }


  //// account페이지 sampledata
  @observable todos2 = exampleDataset;
  @computed get getTodos2() {
    return this.todos2 ? this.todos2.slice() : [];
  }
}
