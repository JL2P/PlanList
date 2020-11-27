import {
  axios_auth_GET,
  axios_auth_POST,
  axios_auth_PUT,
  axios_auth_DELETE,
} from "../common/CommonAxiosModules";

export default class PointRepository {
  URL = "/api/points";

  // 완료하면 점수 생성
  createPoint = (pointObj) => {
    return axios_auth_POST(this.URL + `/addPoint`, pointObj, {});
  };

  // 완료 취소하면 점수 회수
  deletePoint = (accountId, todoId) => {
    return axios_auth_DELETE(this.URL + `/cancel/${accountId}/${todoId}`, null);
  };

  // 유저의 전체 점수를 전체 조회
  getUserAllPoint = (accountId) => {
    return axios_auth_GET(this.URL + `/pointList/${accountId}`, []);
  };

  // 유저의 총점(누적 점수) 조회
  getUserTotalPoint = (accountId) => {
    return axios_auth_GET(this.URL + `/${accountId}`);
  };

  getUserPointByDate = (pointObj) => {
    return axios_auth_POST(this.URL + `/date`, pointObj, {});
  };

  // 모든 유저의 랭킹 조회
  getAllRank = () => {
    return axios_auth_GET(this.URL + `/all/ranking`, []);
  };
}
