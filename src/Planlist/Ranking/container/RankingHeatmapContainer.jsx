import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import RankingHeatmapView from "../view/RankingHeatmapView";
import Highcharts from "highcharts";

Highcharts.setOptions({
  colors: ["#FFB517"],
});

@inject("Store")
@observer
class RankingHeatmapContainer extends Component {
  render() {
    const { point, todo, account } = this.props.Store;
    const loginId = account.getLoginAccount.accountId;
    const today = todo.getToday;
    const daily = new Date(todo.getToday);
    const myPoints = point.getMyPoints;
    const dailyList = [today];
    const dailyPoint = [];
    for (var i = 1; i < 140; i++) {
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
        }
      }
      dailyPoint.push(count);
    }
    const heat = [];
    let row = 6; //4;
    var col = 19; //9;
    for (var i = 0; i < dailyPoint.length; i++) {
      let temp = [];
      temp.push(col);
      temp.push(row);
      temp.push(dailyPoint[i]);
      // heat.push([row, col, dailyPoint[i]]);
      heat.push(temp);

      if (row > 0) {
        row -= 1;
      } else {
        row = 6; //4;
        col -= 1;
      }
    }
    return (
      <div>
        <RankingHeatmapView
          heat={heat}
          dailyList={dailyList}
          loginId={loginId}
        />
      </div>
    );
  }
}

export default RankingHeatmapContainer;
