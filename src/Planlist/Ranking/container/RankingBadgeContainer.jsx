import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import RankingBadgeView from "../view/RankingBadgeView";

@inject("Store")
@observer
class RankingBadgeContainer extends Component {


  render() {
    const { point, account } = this.props.Store;
    const loginId = account.getLoginAccount.accountId;
    const myLevel = point.getMyLevel;

    return (
      <div>
        <RankingBadgeView myLevel={myLevel} loginId={loginId} />
      </div>
    );
  }
}

export default RankingBadgeContainer;
