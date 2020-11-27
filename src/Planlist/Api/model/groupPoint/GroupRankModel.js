export default class GroupRankModel {
    constructor(groupRankObj) {
        this.groupRankId = groupRankObj.groupRankId;
        this.groupId = groupRankObj.groupId;
        this.groupModel = groupRankObj.group;
        this.groupTotal = groupRankObj.groupTotal;
    }
}