export default class GroupPointModel {
    constructor(groupPointObj) {
        this.groupPointId = groupPointObj.groupPointId;
        this.accountId = groupPointObj.accountId;
        this.todoId = groupPointObj.todoId;
        this.groupId = groupPointObj.groupId;
        this.likeCount = groupPointObj.likeCount;
        this.point =  groupPointObj.point;
    }
}