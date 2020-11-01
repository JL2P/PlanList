import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class CommentRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/todos";

    // GET /api/todos/{todoId}/comments
    commentList = (todoId)=>{
        return axios.get(this.URL+`/${todoId}/comments`).then(request=>request.data||{})
    }

    // POST /api/todos/{todoId}/comments
    commentCreate = (todoId, CommentAddModel)=>{
        return axios.post(this.URL+`/${todoId}/comments`,CommentAddModel).then(request=>request.data||{})
    }

    //{todoId}/comments/{commentId}
    commentDetail = (todoId,commentId)=>{
        return axios.get(this.URL+`/${todoId}/comments/${commentId}`).then(request=>request.data||{})
    }

    //api/todos/{todoId}/comments/{commentId}/subComments
    subCommentCreate = (todoId,commentId, SubCommentAddModel)=>{
        return axios.post(this.URL+`/${todoId}/comments/${commentId}/subComments`,SubCommentAddModel).then(request=>request.data||{})
    }
    

}