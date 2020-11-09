
import {axios_GET, axios_POST, axios_PUT, axios_DELETE} from "../common/CommonAxiosModule"


//Account관련 Api와 연동하는 클래스
export default class TodoRepository{

   //공통 적으로 사용되는 URL
   URL = "/api/todos";


   // todo list 조회
   // GET /api/todos/
    TodoList = () => {
        return axios_GET(this.URL,[]);
    }

    //todo 조회
    // GET /api/todo/{todoId}/
    todoDetail = (todoId) =>{
        return axios_GET(this.URL+`${todoId}/`,{}) 
        
    }

    //todo 추가
    // POST /api/todo/
    todoCreate = (TodoModel)=>{
        return axios_POST(this.URL,TodoModel,{})
    }

     // account 수정
    // PUT /api/account/
    todoUpdate = (TodoModel)=>{
        return axios_PUT(this.URL,TodoModel,{})
    }

    // todo 삭제
    // DELETE /api/todo/{todoId}/
    todoDelete = (todoId)=>{
        return axios_DELETE(this.URL+`/${todoId}/`,null)
    }
}





