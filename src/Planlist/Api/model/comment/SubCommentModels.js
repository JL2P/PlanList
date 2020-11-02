// 대댓글 조회시 서버의 DTO와 매핑되는 모델
export class SubCommentModel{
    constructor(subCommentObj){
        this.subCommentId = subCommentObj.subCommentId;
        this.commentId = subCommentObj.commentId;       // CommentId
        this.targetId = subCommentObj.targetId;         // 어떤 사람의 댓글인지
        this.text = subCommentObj.text;                 // 내용
        this.writer = subCommentObj.writer;             // 작성자ID
        this.likePoint = subCommentObj.likePoint;       // 좋아요
    }
};

// 대댓글 생성시 서버의 DTO와 매핑되는 모델
export class SubCommentAddModel{
    constructor(subCommentObj){
        this.targetId = subCommentObj.targetId;
        this.text = subCommentObj.text;
        this.writer = subCommentObj.writer;
    }
};


// 대댓글 생성시 서버의 DTO와 매핑되는 모델
export class SubCommentModifyModel{
    constructor(subCommentObj){
        this.subCommentId = subCommentObj.subCommentId;
        this.text = subCommentObj.text;
    }
};