import { inject, observer } from "mobx-react";
import React, { Component } from "react";

@inject("Store")
@observer
class RankingPage extends Component {
  componentDidMount() {
    const { account, point } = this.props.Store;
    account.getApiAccountInfo();
    const id = account.getLoginAccount.accountId;
    console.log("로그인!!", id);

    // 유저의 모든 점수 조회
    point.allPoints(id);
    const pointObj = point.getMyPoints[6];
    console.log("점수!!", typeof pointObj, pointObj);
    point.toodayPoint({
      accountId: "hello",
      created: "2020-11-25T05:46:36.957Z",
      likeCount: 0,
      point: 0,
      pointId: 0,
      todoId: "string",
    });
    console.log("오잉", point.getMyTodayPoint);
    // point.addPoint({
    //   accountId: "hello",
    //   likeCount: 1,
    //   todoId: "string 4",
    // });
    point.deletePoint(pointObj);
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default RankingPage;
