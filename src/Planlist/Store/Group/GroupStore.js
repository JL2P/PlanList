import { observable, computed, action, runInAction } from "mobx";
import CategoryList_Data from "../../Category/CategoryList_Data";
import GroupModel from "../../Api/model/group/GroupModel";
import GroupTransferModel from "../../Api/model/group/GroupTransferModel";
import GroupAddModel from "../../Api/model/group/GroupAddModel";
import GroupModifyModel from "../../Api/model/group/GroupModifyModel";
import MemberModel from "../../Api/model/member/MemberModel";
import MemberTransferDto from "../../Api/model/member/MemberModel";
import GroupGalleryModel from "../../Api/model/groupGallery/GroupGalleryModel"

import GroupRepository from "../../Api/Repository/GroupRepository"
import MemberRepository from "../../Api/Repository/MemberRepository"
import GroupGalleryRepository from "../../Api/Repository/GroupGalleryRepository"

import GroupTodoStore from './GroupTodoStore';

export default class GroupStore {
    constructor(root) {
        this.root = root;
        this.groupRepository = new GroupRepository();
        this.memberRepository = new MemberRepository();        
        //승훈 추가 GroupTodoStore를 따로 관리하기위함(소스가 너무 길어짐)
        this.groupTodo = new GroupTodoStore(this);
        this.groupGalleryRepository = new GroupGalleryRepository();
      }

  
      //모델 정의
      @observable group = {};
      @observable groups = [];
      @observable categoryList = CategoryList_Data;
      @observable select_Group_categoryList = this.categoryList[0];
      @observable detailGroup_modalOpen = false;
      //그룹 디테일에 해당되는 내용
      @observable detailGroup_memberLength = 0; 
      @observable detailGroup_memberList = [{}];
      @observable myGroups = [];
      @observable activeItem = "전체글";

      @observable member = {};
      @observable members = [];
      @observable groupId = 0;
      @observable confirm = false;
      @observable manager = false;

      @observable groupGallery = {};

      @computed get getGroup(){return this.group;}
      @computed get getGroups(){return this.groups;}
      @computed get getDetailGroup_modalOpen(){return this.detailGroup_modalOpen}
      @computed get getCategoryList(){return this.categoryList}
      @computed get getSelect_Group_categoryList(){return this.select_Group_categoryList};
      @computed get getDetailGroup_memberLength(){return this.detailGroup_memberLength;}
      @computed get getDetailGroup_memberList(){return this.detailGroup_memberList;}
      @computed get getMyGroups(){return this.myGroups;}
      @computed get getActiveItem(){return this.activeItem;}

      @computed get getMember(){return this.member;}
      @computed get getMembers(){return this.members;}
      @computed get getGroupId(){return this.groupId;}
      @computed get getConfirm(){return this.confirm;}
      @computed get getManager(){return this.manager;}
      

      //modal open & close
      @action
      detailGroup_modalCheck = (check) => {
        this.detailGroup_modalOpen = check
      }

      //카테고리 리스트별로 출력
      @action
      categoryList_select = (item) => {
        this.select_Group_categoryList = item
        localStorage.setItem('select_Group_categoryList', JSON.stringify(this.select_Group_categoryList))
      }

      //그룹 전체 리스트 출력
      @action
      async getApiGroups(){
        const apiGetGroups = await this.groupRepository.groupList();
        runInAction(()=>{
          this.groups = apiGetGroups.map(group => new GroupModel(group));
        });
        
        
        //로컬스토리지에 내 그룹 저장 // object를 저장하는 방법
        localStorage.setItem('myGroups', JSON.stringify(this.myGroups));
      }

      //그룹 생성
      @action
      async createGroup(groupObj,file){
         
        const groupModel = new GroupAddModel(groupObj);
        const result = await this.groupRepository.groupCreate(groupModel);
        
        let today = new Date();   
        
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let day = today.getDay();  // 요일
        
        const newToday = `${year}.${month}.${date}`
        
        this.groupId = result.id;
        const accountId = result.master;
        this.confirm = true;
        this.manager = true;
        const newMember = {
          "accountId":accountId,
          "confirm": this.confirm,
          "groupId": this.groupId,
          "manager": this.manager,
          "date": newToday
        }
        //이미지 저장
        if(file){
          await this.groupGalleryRepository.galleryAdd(file, this.groupId);
          this.groupGallery = file;
        } 

        this.getApiGroups()
        //생성시 그룹 관리자 생성
        this.groupMember(newMember).then(res=>{
          //생성시 해당 그룹으로 연결
          this.groupDetail_page(result.id,accountId);
        });
        
      }

      //그룹 디테일 조회
      @action
      async groupDetail_page(groupId,accountId){
        const result = await this.groupRepository.groupDetail(groupId);
        this.group = new GroupModel(result);

        if(this.group.galleries[0] ){
          this.groupGallery = this.group.galleries[0].filePath
        }else{
          this.groupGallery = null;
        }
        

        //해당 그룹 아이디 멤버 리스트
        this.detailGroup_memberLength = this.group.members.length;
        this.detailGroup_memberList = this.group.members;

        let memberList = this.detailGroup_memberList.map(member => 
          (accountId === member.accountId && member)
        )
        for(var i = 0; i< memberList.length; i++){
          if(memberList[i]){
            this.member = memberList[i]
          }
        }

        //해당 그룹 아이디 그룹 투두
        this.groupTodoList = this.group.groupTodos;

        //로컬스토리지에 그룹아이디 저장
        localStorage.groupId = groupId   
      }

      //그룹 디테일 페이지 설정 수정
      @action
      async settingSave(groupObj,file){
        //이미지 저장
        if(file){
          await this.groupGalleryRepository.galleryAdd(file, this.groupId);
          this.groupGallery = file;
        } 
        const groupModel = new GroupModifyModel(groupObj);
        await this.groupRepository.groupModify(groupModel);

        
      }

      //그룹 디테일 페이지 설정에서 그룹 삭제
      @action
      async settingRemove(groupId){
        await this.groupRepository.groupDelete(groupId)
      }

      //내 그룹을 로컬스토리지에서 호출
      @action
      myGroups_array(myGroups){
        this.myGroups = myGroups;
      }

      //그룹 디테일 내비게이션
      handleItemClick(name){
        this.activeItem = name;
        localStorage.name = name;
      }

      /*****************************************멤버 관련*********************************************/
      //그룹원 생성
      @action
      async groupMember(memberObj){
        const memberModel = new MemberModel(memberObj);
        await this.memberRepository.memberCreate(memberModel);
      }

      //그룹원 신청 확인
      @action
      async memberApply(memberObj){
        const memberModel = new MemberModel(memberObj);
        await this.memberRepository.memberModify(memberModel);
      }

      //멤버 제거
      @action
      async memberRemove(groupId,memberId){
        const result = await this.memberRepository.memberDelete(groupId,memberId);
      }

      //멤버 전체 리스트
      @action
      async memberListAll(){
        const memberList = await this.memberRepository.memberList();
        this.members = memberList.map(member => new MemberModel(member));
      }
      //그룹장 양도 (그룹원 -> 마스터)
      @action
      async managerTransfer_U(memberObj,groupObj){
        const memberModel = new MemberTransferDto(memberObj);
        const groupModel = new GroupTransferModel(groupObj);
        await this.memberRepository.memberTranfer(memberModel);
        const result = await this.groupRepository.groupTransfer(groupModel);
      }

      //그룹장 양도 (마스터 -> 유저)
      @action
      async managerTransfer_M(memberObj,groupObj){
        const memberModel = new MemberTransferDto(memberObj);
        const groupModel = new GroupTransferModel(groupObj)
        await this.memberRepository.memberTranfer(memberModel);
        const result = await this.groupRepository.groupTransfer(groupModel);
      }

}