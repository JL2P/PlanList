import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";



export default class FollowStore {
    constructor(root) {
      this.root = root;
      this.followRepository = new FollowRepository();
    }

    //True : 팔로우관계 False : 노팔로우
    @observable isFollowed = false;
    @observable isfollowing = false;

    @observable followers = [];
    @observable follower = {};

    @observable notConfirmFollowers = [];

    //팔로우인지 상테를 가져온다
    @computed get getIsFollowed(){
      return this.isFollowed
    }
    //팔로잉되어 있는지 상태를 겨자온다
    @computed get getIsFollowing(){
      return this.isFollowing
    }

    @computed get getFollower() {
      return this.follower;
    }
  
    @computed get getMyFollowers() {
      return this.followers;
    }

    @computed get getNotConfirmFollowers(){
      return this.notConfirmFollowers;
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
    async getApiNotConfirmFollowers(){
      const data = await this.followRepository.notConfirmFollowersFunction();
      console.log("getApiNotConfirmFollowers")
      console.log(data)
      this.notConfirmFollowers = data;
    }
    

    @action
    async getApiMyFollowers(){
      const data = await this.followRepository.getMyFollowersFunction();
      console.log("getApiMyfollowers")
      console.log(data)
      this.followers = data;
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
    async followingCheck(followerId) {
      const followStateObj = await this.followRepository.followingCheckFunction(followerId);

      console.log("FLAG "+followStateObj.followState)
      this.isFollowing=followStateObj.followState;
    }
    
    @action
    async followConfirm(followerId) {
      const followStateObj = await this.FollowRepository.followConfirmFunction(followerId);
      
      

      
    }
  }

  