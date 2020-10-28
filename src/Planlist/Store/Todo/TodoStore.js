import { observable, computed, action } from "mobx";
// import AccountModel from "../../Api/model/AccountModel";
import TodoRepository from "../../Api/Repository/TodoRepository";

import TodoModifyModel from "../../Api/model/todo/TodoModifyModel";
import TodoAddModel from "../../Api/model/todo/TodoAddModel";
import TodoModel from "../../Api/model/todo/TodoModel";


//테스트용 추가 -승훈-
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import TodoMainTestModel from "../../Api/model/TodoMainTestModel";

export default class TodoStore {
  constructor(root) {
    this.root = root;
    this.todoRepository = new TodoRepository();
  }

  //모델 정의
  @observable todo = {};
  @observable todos = [];

  @observable today = {}; // 오늘 날짜 : 년-월-일

  @computed get getTodo() {
    return this.todo;
  }

  @computed get getTodos() {
    return this.todos;
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
    console.log(todos)
    this.todos=todos;
  }

  @action 
  async getApiTodos() {    
    const apiGetTodos = await this.todoRepository.TodoList();
    this.todos = apiGetTodos.map(todo=>new TodoModel(todo));
  }

  @action
  async saveTodo(todoObj) {
    const todoModel = new TodoAddModel(todoObj);
    await this.todoRepository.todoCreate(todoModel);
    this.getApiTodos();
  }

  @action
  async modifyTodo(todoObj) {
    const todoModel = new TodoModifyModel(todoObj);
    await this.todoRepository.todoUpdate(todoModel);
    this.getApiTodos();
  }

  @action
  async deleteTodo(todoId) {
    await this.todoRepository.todoDelete(todoId);
    const newMaintodo = this.todos.filter(todo => todo.id!==todoId)
    this.todos = newMaintodo;
  }


  //// account페이지 sampledata
  @observable todos2 = exampleDataset;
  @computed get getTodos2() {
    return this.todos2 ? this.todos2.slice() : [];
  }
}
