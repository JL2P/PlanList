import {
  axios_auth_GET,
  axios_auth_POST,
  axios_auth_PUT,
  axios_auth_DELETE,
} from "../common/CommonAxiosModules";

//Account관련 Api와 연동하는 클래스
export default class TodoRepository {
  //공통 적으로 사용되는 URL
  URL = "/api/todos";

  // 모든 todo 리스트 조회
  TodoAll = () => {
    return axios_auth_GET(this.URL + "/all", []);
  };

  // 선택한 account의 todo 리스트 조회
  selectTodoList = (selectId) => {
    return axios_auth_GET(this.URL + `/account/${selectId}`, []);
  };

  // 로그인한 account의 todo 리스트 조회
  loginTodoList = () => {
    return axios_auth_GET(this.URL + `/login`, []);
  };

  // todo list 조회
  // GET /api/todos/
  TodoList = (followers) => {
    return axios_auth_POST(this.URL+"/my",followers, []);
  };

  //todo 조회
  // GET /api/todo/{todoId}/
  todoDetail = (todoId) => {
    return axios_auth_GET(this.URL + `${todoId}/`, {});
  };

  //todo 추가
  // POST /api/todo/
  todoCreate = (TodoModel) => {
    return axios_auth_POST(this.URL, TodoModel, {});
  };

  // account 수정
  // PUT /api/account/
  todoUpdate = (TodoModel) => {
    return axios_auth_PUT(this.URL, TodoModel, {});
  };

  // todo 삭제
  // DELETE /api/todo/{todoId}/
  todoDelete = (todoId) => {
    return axios_auth_DELETE(this.URL + `/${todoId}/`, null);
  };

  // todo 좋아요
  onLike = (todoId) => {
    return axios_auth_POST(this.URL + `/${todoId}/like`);
  };

  // todo 좋아요 취소
  cancelLike = (todoId) => {
    return axios_auth_DELETE(this.URL + `/${todoId}/like`);
  };

  // todo 완료
  completeTodo = (todoId) => {
    return axios_auth_POST(this.URL + `/${todoId}/complete`);
  };

  // todo 미완료
  incompleteTodo = (todoId) => {
    return axios_auth_POST(this.URL + `/${todoId}/incomplete`);
  };
}
