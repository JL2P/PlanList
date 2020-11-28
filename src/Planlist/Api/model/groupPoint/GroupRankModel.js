export default class GroupRankModel {
    constructor(groupRankObj) {
        this.groupRankId = groupRankObj.groupRankId;
        this.groupId = groupRankObj.groupId;
        //groupModel은 Group객체를 받기위함
        this.groupModel = groupRankObj.group;
        this.groupTotal = groupRankObj.groupTotal;

    }
}