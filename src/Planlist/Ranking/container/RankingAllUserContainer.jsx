import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RankingAllUserView from "../view/RankingAllUserView";

@inject("Store")
@observer
class RankingAllUserContainer extends Component {
  componentDidMount() {
    const { point } = this.props.Store;
    const { account } = this.props.Store;

    point.allRanking();
    account.getApiAccountInfo();
  }

  render() {
    const { point, account } = this.props.Store;
    const rankingList = point.getRanking;
    // console.log("랭킹", rankingList, rankingList.indexOf());
    const rankingForChart = point.getRankingForChart;
    // console.log("ranking", ranking);
    // const rankingData = [];
    // rankingData.push(ranking.map((item) => ({ x: item.total })));

    // console.log("랭킹", ranking);
    // console.log("랭킹", rankingData);

    const loginId = account.getLoginAccount.accountId;
    // console.log("뾰로롱", account.getLoginAccount);

    const rankingData = [];
    if (rankingList.length <= 10) {
      var i = 100 / rankingList.length;
      var j = 1;
      rankingList.map((item) => {
        rankingData.push({
          name: "상위 " + i.toFixed(0) + "%",
          x: j, // index
          y: item.total, // 점수
          color: item.accountId === loginId ? "#FFB517" : "#FFF0CD",
        });
        i += 100 / rankingList.length;
        j += 1;
      });
    } else {
      var i = 0;
      var j = 0;
      const section = rankingList.length / 10;
      console.log("section", section);
      var idx = rankingList.findIndex((item) => {
        return item.accountId === loginId;
      });
      for (var k = 0; k < 10; k++) {
        // console.log("위치", 1 <= 7 < 10);
        rankingData.push({
          name: "상위 " + (i + 1) * 10 + "%",
          x: j,
          y: rankingList[(i + section / 2).toFixed(0)].total, // 중앙값
          // y: j,
          // y:
          //   rankingList
          //     .slice(i * section, (i + 1) * section)
          //     .reduce((sum, cur) => {
          //       sum["total"] += cur["total"];
          //       return sum;
          //     }) / section,
          // color: section * i <= idx < section * (i + 1) ? "#FFB517" : "#FFF0CD",
          color:
            section * i <= idx && idx < section * (i + 1)
              ? "#FFB517"
              : "#FFF0CD",
        });
        i += 1;
        j += 1;
      }
    }

    // console.log("하이", rankingData);

    return (
      <div>
        <RankingAllUserView
          // rankingForChart={rankingForChart}
          rankingData={rankingData}
        />
      </div>
    );
  }
}

export default RankingAllUserContainer;
