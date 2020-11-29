import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import GroupRankingListContainer from "./container/GroupRankingListContainer";
import RankingAllUserContainer from "./container/RankingAllUserContainer";

@inject("Store")
@observer
class RankingPage extends Component {
  componentDidMount() {
    const { groupPoint, account, point } = this.props.Store;
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
