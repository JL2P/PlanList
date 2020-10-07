import TodoModelStore from "./TodoModelStore";
import TodoRepositoryStore from "./TodoRepositoryStore";

class TodoStore {
  constructor() {
    this.model = new TodoModelStore(this);
    this.repository = new TodoRepositoryStore(this);
  }
}

export default new TodoStore();
