import { observable, computed, action } from "mobx";
// import AccountModel from "../../Api/model/AccountModel";
import TodoAddModel from "../../Api/model/TodoAddModel";
import TodoModel from "../../Api/model/TodoModel";
import TodoRepository from "../../Api/Repository/TodoRepository";

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
  @observable mainTodos = [];

  @computed get getTodo() {
    return this.todo;
  }

  @computed get getTodos() {
    return this.todos;
  }

  @computed get getMainTodos() {
    return this.mainTodos;
  }

  @action
  getApiTodo(columns) {
    const TEST_COUNT = 17;

    //나중에 API를 이용해서 데이터를 가지고 오는 부분
    const apiGetTodos = [...Array(TEST_COUNT).keys()].map(
      (_, index) => exampleDataset[index + 1]
    );

    //메인화면에서 보여지는 column수에 따라 frame갯수 나누기
    const frame = [...Array(columns).keys()].map((_) => []);

    //각 frame에 item넣어주기
    for (let i = 0; i < apiGetTodos.length; i++) {
      frame[Math.floor(i % columns)].push(
        new TodoMainTestModel(apiGetTodos[i])
      );
    }

    this.mainTodos = frame;
  }

  @action
  setMainTodos(newMainTodos) {
    this.mainTodos = newMainTodos;
  }

  @action
  async editTodo(todoObj) {
    const todoModel = new TodoModel(todoObj);
    const result = await this.todoRepository.todoUpdate(todoModel);
    console.log(result);
  }

  @action
  async saveTodo(todoObj) {
    const todoModel = new TodoAddModel(todoObj);
    await this.todoRepository.todoCreate(todoModel);
  }

  //// account페이지 sampledata
  @observable todos2 = exampleDataset;
  @computed get getTodos2() {
    return this.todos2 ? this.todos2.slice() : [];
  }
}
