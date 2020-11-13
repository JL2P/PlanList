import axios from "axios"

const HEADER = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    },
};

//GroupTodo관련 Api와 연동하는 클래스
export default class GroupTodoRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";

    //GroupTodo list 조회
    // GET / api/groups/
    groupTodoList = () => {
        return axios.get(this.URL+`groupTodo`,HEADER).then(request => request.data||[])
    }
    //GroupTodo 조회
    // GET /api/groups/{groupId}/
    groupTodoDetail = (groupTodoId,groupId) =>{
        return axios.get(this.URL+`${groupId}/groupTodo/${groupTodoId}/`,HEADER).then(request=>request.data||{})
    }

    //GroupTodo 추가
    //POST /api/groups/
    groupTodoCreate = (groupTodoModel) => {
        return axios.post(this.URL+`${groupTodoModel.groupId}/groupTodo`,groupTodoModel,HEADER).then(request => request.data||[])
    }
    
    // GroupTodo 수정
    // PUT /api/groups/
    groupTodoModify = (groupTodoModel)=>{
        return axios.put(this.URL+`${groupTodoModel.groupId}/groupTodo`,groupTodoModel,HEADER).then(request=>request.data||{})
    }

    //GroupTodo 삭제
    // DELETE /api/groups/{groupId}
    groupTodoDelete = (groupId,groupTodoId) => {
        return axios.delete(this.URL+`${groupId}/groupTodo/${groupTodoId}`,HEADER).then(request=>request.data||null)
    }   
}