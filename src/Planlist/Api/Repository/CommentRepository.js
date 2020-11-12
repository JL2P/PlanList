import {axios_auth_GET, axios_auth_POST,axios_auth_DELETE} from "../common/CommonAxiosModules"


//Account관련 Api와 연동하는 클래스
export default class CommentRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/todos";

    // GET /api/todos/{todoId}/comments
    commentList = (todoId)=>{
        return axios_auth_GET(this.URL+`/${todoId}/comments`,{})
    }

    // POST /api/todos/{todoId}/comments
    commentCreate = (todoId, CommentAddModel)=>{
        return axios_auth_POST(this.URL+`/${todoId}/comments`,CommentAddModel,{})
    }

    //{todoId}/comments/{commentId}
    commentDetail = (todoId,commentId)=>{
        return axios_auth_GET(this.URL+`/${todoId}/comments/${commentId}`,{})
    }

    //api/todos/{todoId}/comments/{commentId}/subComments
    subCommentCreate = (todoId,commentId, SubCommentAddModel)=>{
        return axios_auth_POST(this.URL+`/${todoId}/comments/${commentId}/subComments`,SubCommentAddModel,{})
    }

    commentDelete = (todoId,commentId) =>{
        const addUrl = `/${todoId}/comments/${commentId}`;
        return axios_auth_DELETE(this.URL+addUrl);

    }

    subCommentDelete = (todoId,commentId,subCommentId) =>{
        const addUrl = `/${todoId}/comments/${commentId}/subComments/${subCommentId}`;
        return axios_auth_DELETE(this.URL+addUrl);
    }
    

}