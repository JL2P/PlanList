import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RankingAllUserView from "../view/RankingAllUserView";

@inject("Store")
@observer
class RankingAllUserContainer extends Component {
  componentDidMount() {
    const { point } = this.props.Store;
    point.allRanking();
  }

  render() {
    const { point } = this.props.Store;
    const rankingList = point.getRanking;
    console.log("랭킹", rankingList);
    // console.log("ranking", ranking);
    // const rankingData = [];
    // rankingData.push(ranking.map((item) => ({ x: item.total })));

    // console.log("랭킹", ranking);
    // console.log("랭킹", rankingData);

    return (
      <div>
        <RankingAllUserView />
      </div>
    );
  }
}

export default RankingAllUserContainer;