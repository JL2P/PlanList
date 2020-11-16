export class GroupTodoModel {
  constructor(groupTodoObj) {
    this.id = groupTodoObj.id;
    this.groupId = groupTodoObj.groupId
    this.imgUrl = groupTodoObj.imgUrl;
    this.title = groupTodoObj.title;
    this.description = groupTodoObj.description;
    this.category = groupTodoObj.category;
    this.writer = groupTodoObj.writer;
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