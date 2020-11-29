import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RankingAllUserView from "../view/RankingAllUserView";

@inject("Store")
@observer
class RankingAllUserContainer extends Component {
  componentDidMount() {
    const { point, account } = this.props.Store;
    point.allRanking();
    account.getApiAccountInfo().then(() => {
      const loginId = account.getLoginAccount.accountId;
      point.myRanking(loginId);
    });
  }

  render() {
    const { point, account } = this.props.Store;
    const rankingList = point.getRanking;
    const loginId = account.getLoginAccount.accountId;
    const idx = rankingList.findIndex((item) => {
      return item.accountId === loginId;
    });
    const myRank = ((idx / rankingList.length) * 100).toFixed(0);
    // console.log("따란~", typeof idx, idx, myRank);
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

      for (var k = 0; k < 10; k++) {
        rankingData.push({
          name: "상위 " + (i + 1) * 10 + "%",
          x: j,
          y: rankingList[(i + section / 2).toFixed(0)].total, // 중앙값
          color:
            // section * i <= idx && idx < section * (i + 1)
            i * 10 <= myRank && myRank < (i + 1) * 10 ? "#FFB517" : "#FFF0CD",
        });
        i += 1;
        j += 1;
      }
    }

    return (
      <div>
        <RankingAllUserView
          rankingData={rankingData}
          loginId={loginId}
          myRank={myRank}
        />
      </div>
    );
  }
}

export default RankingAllUserContainer;
