import {
    axios_auth_GET,
    axios_auth_POST,
    axios_auth_DELETE,
  } from "../common/CommonAxiosModules";

//GroupTodo관련 Api와 연동하는 클래스
export default class GroupTodoCommentRepository{
    //공통 URL
    URL = "/api/groups/";

    //GroupTodo의 모든 댓글 조회
    // @GetMapping("/{todoId}/comments")
    groupTodoComments =(groupId,todoId) =>{
        const url = this.URL + `${groupId}/todos/${todoId}/comments`;
        return axios_auth_GET(url,[])
    }

    // 댓글 작성
    // @PostMapping("{groupId}/todos/{todoId}/comments")
    createGroupTodoComment = (groupId,todoId,groupTodoCommentAddModel)=>{
        const url = this.URL + `${groupId}/todos/${todoId}/comments`;
        return axios_auth_POST(url,groupTodoCommentAddModel,{})
    }

    // 댓글 삭제
    // @DeleteMapping("{groupId}/todos/{todoId}/comments/{commentId}")
    deleteGroupTodoComment = (groupId, todoId, commentId)=>{
        const url = this.URL + `${groupId}/todos/${todoId}/comments/${commentId}`;
        return axios_auth_DELETE(url,{})
    }

    // 대댓글 작성
    // @PostMapping("{groupId}/todos/{todoId}/comments/{commentId}/subComments")
    createGroupTodoSubComment = (groupId, todoId, commentId, groupTodoSubCommentAddModel)=>{
        const url = this.URL + `${groupId}/todos/${todoId}/comments/${commentId}/subComments`;
        return axios_auth_POST(url,groupTodoSubCommentAddModel,{})
    }

    // 대댓글 삭제
    // @DeleteMapping("{groupId}/todos/{todoId}/comments/{commentId}/subComments/{subCommentId}")
    deleteGroupTodoSubComment = (groupId, todoId, commentId, subCommentId)=>{
        const url = this.URL + `${groupId}/todos/${todoId}/comments/${commentId}/subComments/${subCommentId}`;
        return axios_auth_DELETE(url,{})
    }

}