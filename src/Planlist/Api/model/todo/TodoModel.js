import { CommentModel } from '../comment/CommentModels';

export default class TodoModel{
    constructor(todoObj){
        this.todoId = todoObj.todoId;
        this.imgUrl = todoObj.imgUrl;
        this.title = todoObj.title;
        this.description = todoObj.description;
        this.category = todoObj.category;
        this.writer = todoObj.writer;
        this.endTime = todoObj.endTime;
        this.groupAt = todoObj.groupAt;
        this.likePoint = todoObj.likePoint;  
        this.likeState = todoObj.likeState;  
        this.comments = todoObj.comments.map(comment=>new CommentModel(comment));
    }
}