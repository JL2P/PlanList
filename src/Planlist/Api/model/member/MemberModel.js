export default class MemberModel{
    constructor(memberObj){
        this.id = memberObj.id;
        this.accountId = memberObj.accountId;
        this.confirm = memberObj.confirm;
        this.groupId = memberObj.groupId;
        this.manager = memberObj.manager;
        this.date = memberObj.date;
    }
}

//그룹장 양도 DTO
export class MemberTransferModel{
    constructor(memberObj){
        this.id = memberObj.id;
        this.manager = memberObj.manager;
        this.groupId = memberObj.groupId;
    }
}