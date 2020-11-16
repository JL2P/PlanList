import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";
import AccountModel from "../../Api/model/AccountModel"

export default class FollowStore {
    constructor(root) {
      this.root = root;
      this.followRepository = new FollowRepository();
    }

    //True : 팔로우관계 False : 노팔로우
    @observable isFollowed = false;
    @observable isfollowing = false;

    @observable myfollowerCnt=0;
    @observable myfollowingCnt=0;

    @observable followers = [];
    //승훈 추가
    @observable followings = [];
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

    @computed get getMyFollowerCnt() {
      return this.myfollowerCnt;
    }

    //승훈 추가
    @computed get getMyFollowings(){
      return this.followings;
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
      this.notConfirmFollowers = data.map(follower=>new AccountModel(follower));
    }
    

    @action
    async getApiMyFollowers(){
      const data = await this.followRepository.getMyFollowersFunction();
      console.log("getApiMyfollowers")
      console.log(data)
      this.followers = data.map(follower=>new AccountModel(follower));
    }

    // @action
    // async getfollowinglist(){
    //   const accounId = this.root.account.getLoginAccount.accountId;
    //   this.followRepository.getFollowerlistFunction(accounId)
    // }

    //승훈 생성
    //내가 팔로우를 신청한 사람들중에 나를 수락한 사람들의 데이터를 가져온다.
    //현재는 사용하지않음 
    @action
    async getApiMyFollowings(){
      
      const data = await this.followRepository.getMyFollowinglistFunction();
      console.log("getApiMyfollowings")
      this.followings = data.map(following=>new AccountModel(following));
      console.log(this.followings)
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
      const followStateObj = await this.followRepository.followConfirmFunction(followerId);
    }


    @action
    async followRefuse(followerId) {
      const followStateObj = await this.followRepository.followRefuseFunction(followerId);
    }




    @action
    async getApiFollowers(accountId){
      console.log("getApiFollowers")
      console.log(accountId)
      const data = await this.followRepository.getFollowersFunction(accountId);
      this.followers = data.map(follower=>new AccountModel(follower));
    }

    @action
    async getApiFollowings(accountId){
      console.log("getApiFollowings")
      console.log(accountId)
      const data = await this.followRepository.getFollowingsFunction(accountId);
      this.followings = data.map(following=>new AccountModel(following));
    }
  }

  