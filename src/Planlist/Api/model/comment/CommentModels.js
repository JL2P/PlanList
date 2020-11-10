import { SubCommentModel } from './SubCommentModels';

// 댓글 조회시 서버의 DTO와 매핑되는 모델
export class CommentModel{
    constructor(commentObj){
        this.commentId = commentObj.commentId;
        this.todoId = commentObj.todoId;
        this.text = commentObj.text;
        this.writer = commentObj.writer;
        this.likePoint = commentObj.likePoint;
        this.created = commentObj.created;
        this.subComments = commentObj.subComments.map(subComment => new SubCommentModel(subComment));
    }
};

// 댓글 생성시 서버의 DTO와 매핑되는 모델
export class CommentAddModel{
    constructor(commentObj){
        this.text = commentObj.text;    // 제목
        this.writer = commentObj.writer;  // 작성자ID
    }
};


// 댓글 수정시 서버의 DTO와 매핑되는 모델
export class CommentModifyModel{
    constructor(commentObj){
        this.commentId = commentObj.commentId;    // 제목
        this.text = commentObj.text;  // 내용
    }
};