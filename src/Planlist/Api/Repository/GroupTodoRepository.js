import {
    axios_auth_GET,
    axios_auth_POST,
    axios_auth_PUT,
    axios_auth_DELETE,
  } from "../common/CommonAxiosModules";

//GroupTodo관련 Api와 연동하는 클래스
export default class GroupTodoRepository{
    //공통 URL
    URL = "/api/groups/";

    /* 모든 GroupTodo데이터 조회 
        @GetMapping("/allTodos") */
    groupTodosAll =() =>{
        const url = this.URL + "allTodos";
        return axios_auth_GET(url,[])
    }

    /* 해당 그룹의 모든 GroupTodo 조회 
        @GetMapping("/{groupId}/todos") */
    groupTodos =(groupId) =>{
        const url = this.URL + `${groupId}/todos`;
        return axios_auth_GET(url,[])
    }

    /* GroupTodo상세 정보 조회 
        @GetMapping("/{groupId}/todos/{groupTodoId}") */
    groupTodoDetail = (groupId,groupTodoId)=>{
        const url = this.URL + `${groupId}/todos/${groupTodoId}`;
        return axios_auth_GET(url,{})
    }

    /* GroupTodo 생성 
        @PostMapping("/{groupId}/todos") */
    createGroupTodo =(groupTodoAddModel)=>{
        const url = this.URL + `${groupTodoAddModel.groupId}/todos`
        return axios_auth_POST(url,groupTodoAddModel,{})
    }

    /* GroupTodp 수정 
        @PutMapping("/{groupId}/todos/{groupTodoId}") */
    modifyGroupTodo = (groupId, groupTodoModifyModel) =>{
        const url = this.URL + `${groupId}/todos/${groupTodoModifyModel.groupTodoId}`
        return axios_auth_PUT(url,groupTodoModifyModel,{})
    }

    /* GroupTodo 삭제 
        @DeleteMapping("/{groupId}/todos/{groupTodoId}") */
    deleteGroupTodo = (groupId,groupTodoId)=>{
        const url = this.URL + `${groupId}/todos/${groupTodoId}`
        return axios_auth_DELETE(url)
    }


    checkGroupTodoMember = (groupId, groupTodoId)=>{
        const url = this.URL + `${groupId}/todos/${groupTodoId}/attendCheck`;
        return axios_auth_POST(url)
    }

    addGroupTodoMember = (groupId, groupTodoId, todoId)=>{
        const url = this.URL + `${groupId}/todos/${groupTodoId}/attend`;
        return axios_auth_POST(url,{"todoId":todoId},{})
    }

    deleteGroupTodoMember = (groupId, groupTodoId)=>{
        const url = this.URL + `${groupId}/todos/${groupTodoId}/attend`;
        return axios_auth_DELETE(url)
    }

    // todo 좋아요
    onLike = (groupId, groupTodoId) => {
    
        const url = this.URL +`${groupId}/todos/${groupTodoId}/like` 
        return axios_auth_POST(url);
    };

    // todo 좋아요 취소
    cancelLike = (groupId, groupTodoId) => {
        const url = this.URL +`${groupId}/todos/${groupTodoId}/like` 
        return axios_auth_DELETE(url);
    };

    // {groupId}/todos/{groupTodoId}
    groupTodoImageUpload = (groupId, groupTodoId, file)=>{
        console.log(file)
        let formData = new FormData()
        formData.append("file", file)
        return axios_auth_POST(this.URL+`${groupId}/todos/${groupTodoId}`,formData,[]);
    }

    getGroupTodoGroupInfo = (todoId)=>{
        return axios_auth_GET(this.URL+`todos/members/${todoId}`)
    }

}