export default class TodoModifyModel{
    constructor(todoObj){
        this.todoId = todoObj.todoId;
        this.title = todoObj.title;
        this.description = todoObj.description;
        this.category = todoObj.category;
        this.endTime = todoObj.endTime;
    }
}