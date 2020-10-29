// 댓글 조회시 서버의 DTO와 매핑되는 모델
export class CommentModel{
    constructor(commentObj){
        this.commentId = commentObj.commentId;
        this.text = commentObj.text;
        this.writer = commentObj.writer;
        this.likePoint = commentObj.likePoint;
        this.upper = commentObj.upper;
    }
};

// 댓글 생성시 서버의 DTO와 매핑되는 모델
export class CommentAddModel{
    constructor(commentObj){
        this.title = commentObj.title;
        this.description = commentObj.description;
        this.category = commentObj.category;
        this.writer = commentObj.writer;
        this.upper = commentObj.upper;
    }
};