import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";



export default class FollowStore {
    constructor(root) {
      this.root = root;
      this.followRepository = new FollowRepository();
    }

    async
    follow(followId){
        const accountId = this.root.account.getLoginAccount.accountId;
        this.followRepository.followFunction(accountId,followId)


    }

}