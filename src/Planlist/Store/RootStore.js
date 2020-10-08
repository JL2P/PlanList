import AccountStore from "./Account/AccountStore";
import TodoStore from "./Todo/TodoStore";

class RootStore {
  constructor() {
    this.account = new AccountStore(this);
    this.todo = new TodoStore(this);
  }
}

export default new RootStore();
