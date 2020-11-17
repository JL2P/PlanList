import { GroupTodoSubCommentModel } from './GroupTodoSubCommentModels';

// 댓글 조회시 서버의 DTO와 매핑되는 모델
export class GroupTodoCommentModel{
    constructor(commentObj){
        this.commentId = commentObj.commentId;
        this.todoId = commentObj.todoId;
        this.text = commentObj.text;
        this.writer = commentObj.writer;
        this.likePoint = commentObj.likePoint;
        this.created = commentObj.created;
        this.subComments = commentObj.subComments.map(subComment => new GroupTodoSubCommentModel(subComment));
    }
};

// 댓글 생성시 서버의 DTO와 매핑되는 모델
export class GroupTodoCommentAddModel{
    constructor(commentObj){
        this.text = commentObj.text;    // 제목
        this.writer = commentObj.writer;  // 작성자ID
    }
};