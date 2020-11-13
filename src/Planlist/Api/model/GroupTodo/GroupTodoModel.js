export default class GroupTodoModel {
    constructor(todoObj) {
      this.id = todoObj.id;
      this.groupId = todoObj.groupId
      this.imgUrl = todoObj.imgUrl;
      this.title = todoObj.title;
      this.description = todoObj.description;
      this.category = todoObj.category;
      this.writer = todoObj.writer;
      this.endTime = todoObj.endTime;
      this.groupAt = todoObj.groupAt;
      this.likePoint = todoObj.likePoint;
    }
}