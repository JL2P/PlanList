import AccountStore from "./Account/AccountStore";
import TodoStore from "./Todo/TodoStore";
import GroupStore from "./Group/GroupStore";
import FollowStore from "./Follow/FollowStore";

class RootStore {
  constructor() {
    this.account = new AccountStore(this);
    this.todo = new TodoStore(this);
    this.group = new GroupStore(this);
    this.follow = new FollowStore(this);
  }
}

export default new RootStore();
