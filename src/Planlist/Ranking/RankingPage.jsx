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
    const pointObj = point.getMyPoints;
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
    const { point, todo } = this.props.Store;
    const today = todo.getToday;
    const daily = new Date(todo.getToday);
    const myPoints = point.getMyPoints;

    const date2 = [];
    const dailyList = [today];
    const dailyPoint = [];
    for (var i = 1; i < 7; i++) {
      var temp = new Date(daily.setDate(daily.getDate() - 1));
      var temp2 =
        temp.getFullYear() +
        "-" +
        (temp.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        temp.getDate().toString().padStart(2, "0");
      dailyList.push(temp2);
    }

    for (var i = 0; i < dailyList.length; i++) {
      let count = 0;
      for (var j = 0; j < myPoints.length; j++) {
        if (dailyList[i] === myPoints[j].created.toString().substring(0, 10)) {
          count += myPoints[j].point;
          // console.log(myPoints[j].point, count);
        }
      }
      dailyPoint.push(count);
    }
    console.log(dailyList);
    console.log(dailyPoint);

    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default RankingPage;