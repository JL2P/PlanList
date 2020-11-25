export default class PointModel {
  constructor(pointObj) {
    this.pointId = pointObj.pointId;
    this.accountId = pointObj.accountId;
    this.todoId = pointObj.todoId;
    this.likeCount = pointObj.likeCount;
    this.point = pointObj.point;
    this.created = pointObj.created;
  }
}
