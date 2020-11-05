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
        this.followRepository.followFunction(accountId,followId)


    }
    
    @action
    async getfollowers(){
      const accountId = this.root.account.getLoginAccount.accountId;
      this.followRepository.getFollowersFunction(accountId)
    
    }

    @action
    async followCheck() {
      console.log("follweCheck");
    const accountId = this.root.account.getLoginAccount.accountId;
    const followerId = this.root.account.getAccount.accountId;
    console.log(accountId,followerId)
    const flag = await this.followRepository.followCheckFunction(accountId, followerId);
    
    console.log(flag)
    this.isFollowed=flag;
    }

  }