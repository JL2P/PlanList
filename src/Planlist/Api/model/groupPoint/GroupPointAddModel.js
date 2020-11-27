export default class GroupPointAddModel {
    constructor(groupPointObj) {
        this.accountId = groupPointObj.accountId;
        this.todoId = groupPointObj.todoId;
        this.groupId = groupPointObj.groupId;
        this.likeCount = groupPointObj.likeCount;
    }
}