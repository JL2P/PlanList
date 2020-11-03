export default class MemberModel{
    constructor(memberObj){
        this.id = memberObj.id;
        this.accountId = memberObj.accountId;
        this.confirm = memberObj.confirm;
        this.groupId = memberObj.groupId;
        this.manager = memberObj.manager;
    }
}