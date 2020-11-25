import { observable, computed, action } from "mobx";
import PointRepository from "../../Api/Repository/PointRepository";
import PointAddModel from "../../Api/model/point/PointAddModel";
import PointModel from "../../Api/model/point/PointModel";

export default class PointStore {
  constructor(root) {
    this.root = root;
    this.pointRepository = new PointRepository();
  }

  // 유저의 모든 점수 리스트
  @observable myPoints = [];

  //
  @observable myTodayPoint = 0;

  @computed get getMyPoints() {
    return this.myPoints;
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

  @action
  async deletePoint(pointObj) {
    await this.pointRepository.deletePoint(pointObj);
  }

  // 유저의 모든 점수 조회
  @action
  async allPoints(accountId) {
    const myAllPoints = await this.pointRepository.getUserAllPoint(accountId);
    this.myPoints = myAllPoints.map((item) => new PointModel(item));
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
