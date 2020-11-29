import { observable, computed, action } from "mobx";
import PointRepository from "../../Api/Repository/PointRepository";
import PointAddModel from "../../Api/model/point/PointAddModel";
import PointModel from "../../Api/model/point/PointModel";
import RankModel from "../../Api/model/point/RankModel";

export default class PointStore {
  constructor(root) {
    this.root = root;
    this.pointRepository = new PointRepository();
  }

  @observable myPoints = []; // 유저의 모든 점수 리스트
  @observable myTotal = 0; // 유저의 총점(누적 점수)
  @observable ranking = []; // 모든 유저의 랭킹 리스트
  @observable myRank = {};

  @observable myTodayPoint = 0;

  @computed get getMyPoints() {
    return this.myPoints;
  }

  // 나의 누적 점수
  @computed get getMyTotal() {
    return this.myTotal;
  }

  @computed get getRanking() {
    return this.ranking;
  }

  @computed get getMyTodayPoint() {
    return this.myTodayPoint;
  }

  // 나의 랭크
  @computed get getMyRanking() {
    return this.myRank;
  }

  @computed get getMyLevel() {
    if (this.myRank.total < 120 * 3) {
      // 3일
      return 1;
    } else if (this.myRank.total < 120 * 7) {
      // 일주일
      return 2;
    } else if (this.myRank.total < 120 * 14) {
      // 이주
      return 3;
    } else if (this.myRank.total < 120 * 30) {
      // 한달
      return 4;
    } else if (this.myRank.total < 120 * 90) {
      // 3달
      return 5;
    } else if (this.myRank.total < 120 * 180) {
      // 6달
      return 6;
    } else if (this.myRank.total < 120 * 30 * 9) {
      // 9달
      return 7;
    } else if (this.myRank.total < 120 * 365) {
      // 1년
      return 8;
    } else if (this.myRank.total < 120 * (365 + 180)) {
      // 1년 반
      return 9;
    } else {
      return 10;
    }
  }

  @action
  async myRanking(accountId) {
    const rank = await this.pointRepository.getMyRank(accountId);
    this.myRank = new RankModel(rank);
  }

  // 완료하면 점수 추가
  @action
  async addPoint(pointObj) {
    const pointAddModel = new PointAddModel(pointObj);
    await this.pointRepository.createPoint(pointAddModel);
  }

  // 완료 취소하면 점수 삭제
  @action
  async deletePoint(accountId, todoId) {
    await this.pointRepository.deletePoint(accountId, todoId);
  }

  // 유저의 모든 점수 조회
  @action
  async allPoints(accountId) {
    const myAllPoints = await this.pointRepository.getUserAllPoint(accountId);
    this.myPoints = myAllPoints.map((item) => new PointModel(item));
  }

  // 모든 유저의 랭킹 조회
  @action
  async allRanking() {
    const allRanking = await this.pointRepository.getAllRank();
    this.ranking = allRanking.map((item) => new RankModel(item));
  }

  // 유저의 총점(누적 점수) 조회
  @action
  async myTotalPoint(accountId) {
    const totalPoint = await this.pointRepository.getUserTotalPoint(accountId);
    this.myTotal = totalPoint;
  }

  @action
  async toodayPoint(pointObj) {
    const myTodayPoint = await this.pointRepository.getUserPointByDate(
      pointObj
    );
    this.myTodayPoint = myTodayPoint;
  }
}
