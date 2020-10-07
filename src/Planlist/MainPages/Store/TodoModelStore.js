import { observable, computed, action } from "mobx";

export default class TodoModelStore {
  constructor(root) {
    this.root = root;
  }

  //모델 정의
  @observable user = {};
  @observable title = "TEST";
  @observable description = "";
  @observable writer = "";
  @observable rating = 0;
  @observable start_time = new Date();
  @observable end_time = new Date();
}
