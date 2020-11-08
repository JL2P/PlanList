import axios from "axios"
const HEADER = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    }
}


//Account관련 Api와 연동하는 클래스
export default class TodoRepository{

   //공통 적으로 사용되는 URL
   URL = "/api/todos";


   // todo list 조회
   // GET /api/todos/
    TodoList = () => {
        return axios.get(this.URL,HEADER).then(request=>request.data||[])
    }

    //todo 조회
    // GET /api/todo/{todoId}/
    todoDetail = (todoId) =>{
        return axios.get(this.URL+`${todoId}/`,HEADER).then(request=>request.data||{})
    }

    //todo 추가
    // POST /api/todo/
    todoCreate = (TodoModel)=>{
        return axios.post(this.URL,TodoModel,HEADER).then(request=>request.data||{})
    }

     // account 수정
    // PUT /api/account/
    todoUpdate = (TodoModel)=>{
        return axios.put(this.URL,TodoModel,HEADER).then(request=>request.data||{})
    }

    // todo 삭제
    // DELETE /api/todo/{todoId}/
    todoDelete = (todoId)=>{
        return axios.delete(this.URL+`/${todoId}/`,HEADER).then(request=>request.data||null)
    }
}





