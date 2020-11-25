export default class GroupGalleryModel{
    constructor(galleryObj){
        this.id = galleryObj.id;
        this.title = galleryObj.title;
        this.filePath = galleryObj.filePath; //AWS에 저장된 파일 경로를 DB에 저장
        this.file = galleryObj.filePath
        this.groupId = galleryObj.groupId;
    }
}