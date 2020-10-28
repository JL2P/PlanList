export default class TodoAddModel{
    constructor(todoObj){
        this.imgUrl = todoObj.imgUrl;
        this.title = todoObj.title
        this.description = todoObj.description
        this.category = todoObj.category;
        this.writer = todoObj.writer;
        this.endTime = todoObj.endTime;
        this.groupAt =todoObj.groupAt ||"N";
    }
}