import { GroupTodoCommentModel } from './GroupTodoCommentModels';

export class GroupTodoModel {
  constructor(groupTodoObj) {
    this.groupTodoId = groupTodoObj.groupTodoId;
    this.groupId = groupTodoObj.groupId
    this.imgUrl = groupTodoObj.imgUrl;
    this.title = groupTodoObj.title;
    this.description = groupTodoObj.description;
    this.category = groupTodoObj.category;
    this.writer = groupTodoObj.writer;
    this.likePoint = groupTodoObj.likePoint;
    this.likeState = groupTodoObj.likeState;
    this.members = groupTodoObj.members.map(member => new GroupTodoMemberModel(member))
    this.comments = groupTodoObj.comments.map(
      (comment) => new GroupTodoCommentModel(comment)
    );
  }
}

export class GroupTodoAddModel{
  constructor(groupTodoObj){
    this.groupId=groupTodoObj.groupId;
    this.title=groupTodoObj.title;
    this.imgUrl=groupTodoObj.imgUrl;
    this.description=groupTodoObj.description;
    this.category=groupTodoObj.category;
    this.writer=groupTodoObj.master;
  }
}

export class GroupTodoModifyModel{
  constructor(groupTodoObj){
    this.id = groupTodoObj.id;
    this.title = groupTodoObj.title;
    this.description = groupTodoObj.description;
    this.category = groupTodoObj.category;
  }
}

class GroupTodoMemberModel{
  constructor(memberObj){
    this.groupTodoMemberId = memberObj.groupTodoMemberId;
    this.attender = memberObj.attender;
  }
}