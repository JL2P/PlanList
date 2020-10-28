export default class TodoModifyModel{
    constructor(todoObj){
        this.id = todoObj.id;
        this.title = todoObj.title;
        this.description = todoObj.description;
        this.category = todoObj.category;
        this.endTime = todoObj.endTime;
    }
}