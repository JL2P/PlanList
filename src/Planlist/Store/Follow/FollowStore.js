import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";



export default class FollowStore {
    constructor(root) {
      this.root = root;
      this.followRepository = new FollowRepository();
    }

    //True : 팔로우관계 False : 노팔로우
    @observable isFollowed = false;
    @observable followers = [];
    @observable follower = {};

    //팔로우인지 상테를 가져온다
    @computed get getIsFollowed(){
      return this.isFollowed
    }
    @computed get getFollower() {
      return this.follower;
    }
  
    @computed get getFollowers() {
      return this.followers;
    }

    // API를 호출하여 followers에 followe리스트 데이터를 넣어준다.
    // @action
    // async getApiFollowers() {
    //     const apiGetFollowers = await this.followRepository.AllFollowers;

    //     this.followers = apiGetFollowers.map((follower) =>


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
    async followCheck(followerId) {
    const followStateObj = await this.followRepository.followCheckFunction(followerId);
    
    console.log("FLAG "+followStateObj.followState)
    this.isFollowed=followStateObj.followState;
    }

    @action
    async followConfirm(followerId) {
      const followStateObj = await this.FollowRepository.followConfirmFunction(followerId);
      
      

      
    }
  }

  