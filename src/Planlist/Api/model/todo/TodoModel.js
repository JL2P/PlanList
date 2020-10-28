export default class TodoModel{
    constructor(todoObj){
        this.id = todoObj.id;
        this.imgUrl = todoObj.imgUrl;
        this.title = todoObj.title;
        this.description = todoObj.description;
        this.category = todoObj.category;
        this.writer = todoObj.writer;
        this.endTime = todoObj.endTime;
        this.groupAt = todoObj.groupAt;
        this.likePoint = todoObj.likePoint;  
    }
}