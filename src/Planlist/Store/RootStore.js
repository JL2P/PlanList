import AccountStore from "./Account/AccountStore";
import TodoStore from "./Todo/TodoStore";
import GroupStore from "./Group/GroupStore";
import FollowStore from "./Follow/FollowStore";
import PointStore from "./Point/PointStore";
import GroupPointStore from "./GroupPoint/GroupPointStore";
class RootStore {
  constructor() {
    this.account = new AccountStore(this);
    this.todo = new TodoStore(this);
    this.group = new GroupStore(this);
    this.follow = new FollowStore(this);
    this.point = new PointStore(this);
    this.groupPoint = new GroupPointStore(this);
  }
}

export default new RootStore();
