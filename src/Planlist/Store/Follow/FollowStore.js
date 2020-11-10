import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";



export default class FollowStore {
    constructor(root) {
      this.root = root;
      this.followRepository = new FollowRepository();
    }

    //True : 팔로우관계 False : 노팔로우
    @observable isFollowed = false;

    //팔로우인지 상테를 가져온다
    @computed get getIsFollowed(){
      return this.isFollowed
    }


    @action
    async follow(followId){
        const accountId = this.root.account.getLoginAccount.accountId;
        await this.followRepository.followFunction(accountId,followId)
    }
    
    @action
    async getfollowerlist(){
      const accountId = this.root.account.getLoginAccount.accountId;
      this.followRepository.getFollowerlistFunction(accountId)
    
    }

    @action
    async getfollowinglist(){
      const accountd = this.root.account.getLoginAccount.accountId;
      this.followRepository.getFollowerlistFunction(accountd)
    }

   
    @action
    async followCheck(followId) {
    console.log("follweCheck");

    const flag = await this.followRepository.followCheckFunction(followerId);
    
    console.log("FLAG "+flag)
    this.isFollowed=flag;
    }

  }