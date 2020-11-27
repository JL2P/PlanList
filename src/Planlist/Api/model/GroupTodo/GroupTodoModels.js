import AccountModel from '../AccountModel';
import { GroupTodoCommentModel } from './GroupTodoCommentModels';

export class GroupTodoModel {
  constructor(groupTodoObj) {
    this.groupTodoId = groupTodoObj.groupTodoId;
    this.groupId = groupTodoObj.groupId
    this.imgUrl = groupTodoObj.imgUrl;
    this.title = groupTodoObj.title;
    this.description = groupTodoObj.description;
    this.category = groupTodoObj.category;
    this.writer = groupTodoObj.writer;
    this.likePoint = groupTodoObj.likePoint;
    this.likeState = groupTodoObj.likeState;
    this.members = groupTodoObj.members.map(member => new GroupTodoMemberModel(member))
    this.comments = groupTodoObj.comments.map(
      (comment) => new GroupTodoCommentModel(comment)
    );
    this.accountModel = groupTodoObj.accountModel !== undefined ? new AccountModel(groupTodoObj.accountModel):{}
    this.galleries = groupTodoObj.galleries.map(groupTodoGallery => new GroupTodoGalleryModel(groupTodoGallery));

  }
}

export class GroupTodoAddModel{
  constructor(groupTodoObj){
    this.groupId=groupTodoObj.groupId;
    this.title=groupTodoObj.title;
    this.imgUrl=groupTodoObj.imgUrl;
    this.description=groupTodoObj.description;
    this.category=groupTodoObj.category;
    this.writer=groupTodoObj.master;
  }
}

export class GroupTodoModifyModel{
  constructor(groupTodoObj){
    this.id = groupTodoObj.id;
    this.title = groupTodoObj.title;
    this.description = groupTodoObj.description;
    this.category = groupTodoObj.category;
  }
}

class GroupTodoMemberModel{
  constructor(memberObj){
    this.groupTodoMemberId = memberObj.groupTodoMemberId;
    this.attender = memberObj.attender;
  }
}

class GroupTodoGalleryModel{
  constructor(groupTodoGalleryObj){
    this.galleryId = groupTodoGalleryObj.id;
    this.title = groupTodoGalleryObj.title;
    this.filePath = groupTodoGalleryObj.filePath; //AWS에 저장된 파일 경로를 DB에 저장
    this.file = groupTodoGalleryObj.filePath
    this.todoId = groupTodoGalleryObj.todoId;
  }
}