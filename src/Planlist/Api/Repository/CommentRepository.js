import axios from "axios"

//Account관련 Api와 연동하는 클래스
export default class TodoRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/todos";

    //todo 추가
    // POST /api/todo/
    commentCreate = (todoId, CommentAddModel)=>{
        return axios.post(this.URL+`/${todoId}`,CommentAddModel).then(request=>request.data||{})
    }

}