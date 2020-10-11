import { observable, computed, action } from "mobx";
import AccountModel from "../../Api/model/AccountModel";
import TodoAddModel from '../../Api/model/TodoAddModel';
import TodoModel from "../../Api/model/TodoModel";
import TodoRepository from "../../Api/Repository/TodoRepository"
export default class TodoStore {
  constructor(root) {
    this.root = root;
    this.todoRepository = new TodoRepository();
  }

  //모델 정의
  @observable todo = {};
  @observable todos = [];

  @computed get getTodo(){
    return this.todo
  }

  @computed get getTodos(){
    return this.todos
  }

  @action
  async editTodo(todoObj){
    const todoModel = new TodoModel(todoObj);
    const result = await this.todoRepository.todoUpdate(todoModel);
    console.log(result);
  };

  @action
  async saveTodo(todoObj){
    const todoModel = new TodoAddModel(todoObj);
    const result = await this.todoRepository.todoCreate(todoModel);

  };
}
