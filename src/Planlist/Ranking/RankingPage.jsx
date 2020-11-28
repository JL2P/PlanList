import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import GroupRankingListContainer from "./Container/GroupRankingListContainer";
import RankingAllUserContainer from "./Container/RankingAllUserContainer";

@inject("Store")
@observer
class RankingPage extends Component {
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
