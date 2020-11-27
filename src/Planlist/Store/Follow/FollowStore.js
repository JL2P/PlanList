import FollowRepository from "../../Api/Repository/FollowRepository";
import { observable, computed, action } from "mobx";
import AccountModel from "../../Api/model/AccountModel";

export default class FollowStore {
  constructor(root) {
    this.root = root;
    this.followRepository = new FollowRepository();
  }

  //True : 팔로우관계 False : 노팔로우
  @observable isFollowed = false;

  @observable isFollower = false;
  @observable isFollowing = false;

  @observable myfollowerCnt = 0;
  @observable myfollowingCnt = 0;

  @observable followers = [];
  //승훈 추가//
  @observable followings = [];
  @observable follower = {};

  @observable notConfirmFollowers = [];

  // 팔로잉 유저의 페이지인지 확인
  @observable isFollowingPage = false;

  //팔로우인지 상태를 가져온다
  @computed get getIsFollowed() {
    return this.isFollowed;
  }
  //팔로잉되어 있는지 상태를 겨자온다
  @computed get getIsFollowing() {
    return this.isFollowing;
  }
  //팔로워인지 상태를 가져온다.
  @computed get getIsFollower() {
    return this.isFollower;
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
  @computed get getMyFollowings() {
    return this.followings;
  }

  @computed get getNotConfirmFollowers() {
    return this.notConfirmFollowers;
  }

  @computed get getIsFollowingPage() {
    return this.isFollowingPage;
  }

  // API를 호출하여 followers에 followe리스트 데이터를 넣어준다.
  // @action
  // async getApiFollowers() {
  //     const apiGetFollowers = await this.followRepository.AllFollowers;

  //     this.followers = apiGetFollowers.map((follower) =>

  @action
  async follow(followId) {
    const accountId = this.root.account.getLoginAccount.accountId;
    await this.followRepository.followFunction(accountId, followId);
  }

  @action
  async getApiNotConfirmFollowers() {
    const data = await this.followRepository.notConfirmFollowersFunction();
    this.notConfirmFollowers = data.map(
      (follower) => new AccountModel(follower)
    );
  }

  @action
  async getApiMyFollowers() {
    const data = await this.followRepository.getMyFollowersFunction();
    this.followers = data.map((follower) => new AccountModel(follower));
  }

  //승훈 생성
  //내가 팔로우를 신청한 사람들중에 나를 수락한 사람들의 데이터를 가져온다.
  //현재는 사용하지않음
  @action
  async getApiMyFollowings() {
    const data = await this.followRepository.getMyFollowinglistFunction();
    this.followings = data.map((following) => new AccountModel(following));
  }

  @action
  async followCheck(followerId) {
    const followStateObj = await this.followRepository.followCheckFunction(
      followerId
    );

    this.isFollowed = followStateObj.followState;
  }

  @action
  async followingCheck(followerId) {
    const followStateObj = await this.followRepository.followingCheckFunction(
      followerId
    );

    this.isFollowing = followStateObj.followState;
  }

  @action
  async followingPageCheck(followerId) {
    const followStateObj = await this.followRepository.followingPageCheckFunction(
      followerId
    );

    this.isFollowingPage = followStateObj.followState;
  }

  @action
  async followerCheck(followerId) {
    const followStateObj = await this.followRepository.followerCheckFunction(
      followerId
    );
    this.isFollower = followStateObj.followState;
  }

  @action
  async followConfirm(followerId) {
    const followStateObj = await this.followRepository.followConfirmFunction(
      followerId
    );
  }

  //팔로잉요청 거절/ 팔로워리스트에서 팔로워 삭제한다.
  @action
  async followRefuse(followerId) {
    const followStateObj = await this.followRepository.followRefuseFunction(
      followerId
    );
  }

  @action
  async deleteMyFollowing(followingId) {
    const followStateObj = await this.followRepository.deleteMyFollowingFunction(
      followingId
    );
  }

  @action
  async getApiFollowers(accountId) {
    const data = await this.followRepository.getFollowersFunction(accountId);
    this.followers = data.map((follower) => new AccountModel(follower));
  }

  @action
  async getApiFollowings(accountId) {
    const data = await this.followRepository.getFollowingsFunction(accountId);
    this.followings = data.map((following) => new AccountModel(following));
  }
}
