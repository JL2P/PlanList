import { observable, computed, action } from "mobx";

export default class TodoStore {
  constructor(root) {
    this.root = root;
  }

  //모델 정의
  @observable todo = {};
  @observable todos = [];
}
