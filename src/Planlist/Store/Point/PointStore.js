import { observable, computed, action } from "mobx";
import PointRepository from "../../Api/Repository/PointRepository";
import PointAddModel from "../../Api/model/point/PointAddModel";
import PointModel from "../../Api/model/point/PointModel";

export default class PointStore {
  constructor(root) {
    this.root = root;
    this.pointRepository = new PointRepository();
  }

  @observable myPoints = []; // 유저의 모든 점수 리스트
  @observable myTotal = 0; // 유저의 총점(누적 점수)

  //
  @observable myTodayPoint = 0;

  @computed get getMyPoints() {
    return this.myPoints;
  }

  @computed get getMyTotal() {
    return this.myTotal;
  }

  @computed get getMyTodayPoint() {
    return this.myTodayPoint;
  }

  // 완료하면 점수 추가
  @action
  async addPoint(pointObj) {
    const pointAddModel = new PointAddModel(pointObj);
    await this.pointRepository.createPoint(pointAddModel);
    // this.allPoints();
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

  // 유저의 총점(누적 점수) 조회
  @action
  async myTotalPoint(accountId) {
    const totalPoint = await this.pointRepository.getUserTotalPoint(accountId);
    console.log("토탈", totalPoint);
    this.myTotal = totalPoint;
  }

  @action
  async toodayPoint(pointObj) {
    const myTodayPoint = await this.pointRepository.getUserPointByDate(
      pointObj
    );
    // console.log();
    this.myTodayPoint = myTodayPoint;
  }
}
