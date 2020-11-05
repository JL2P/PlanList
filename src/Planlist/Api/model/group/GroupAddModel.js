export default class GroupAddModel{
    constructor(groupObj){
        this.imgUrl = groupObj.imgUrl; //이미지 URL
        this.title = groupObj.title //제목
        this.description = groupObj.description //설명글
        this.category = groupObj.category; //카테고리
        this.master = groupObj.master; //그룹장
        this.members = groupObj.members;
    }
}