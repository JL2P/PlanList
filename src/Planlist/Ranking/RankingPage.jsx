import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import GroupRankingListContainer from "./container/GroupRankingListContainer";
import RankingAllUserContainer from "./container/RankingAllUserContainer";

@inject("Store")
@observer
class RankingPage extends Component {
  //테스트
  componentDidMount() {
    const { groupPoint } = this.props.Store;
    groupPoint.testGroupAllRankings();
  }

  render() {
    return (
      <div>
        <GroupRankingListContainer></GroupRankingListContainer>
        <RankingAllUserContainer />
      </div>
    );
  }
}

export default RankingPage;
