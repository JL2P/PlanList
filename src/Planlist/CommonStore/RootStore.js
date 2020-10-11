import AccountStore from "./Account/AccountStore";
import TodoStore from "./Todo/TodoStore";

class RootStore {
  constructor() {
    this.accountStore = new AccountStore(this);
    this.todoStore = new TodoStore(this);
  }
}

export default new RootStore();
