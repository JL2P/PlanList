import MemberModel from '../member/MemberModel';
import {GroupTodoModel} from '../GroupTodo/GroupTodoModel';

export default class GroupModel{
    constructor(groupObj){
        this.id = groupObj.id;
        this.imgUrl = groupObj.imgUrl; //이미지 URL
        this.title = groupObj.title //제목
        this.description = groupObj.description //설명글
        this.category = groupObj.category; //카테고리
        this.master = groupObj.master; //그룹장
        this.openAt = groupObj.openAt; //그룹 공개 여부
        //프록시로 감싸여 있는 members를 꺼내는 작업
        this.members = groupObj.members.map(member=> new MemberModel(member));
        //프록시로 감싸여 있는 groupTodos를 꺼내는 작업
        this.groupTodos = groupObj.groupTodos.map(groupTodo => new GroupTodoModel(groupTodo));
    }
}
