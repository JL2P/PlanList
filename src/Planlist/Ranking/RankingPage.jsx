import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import RankingAllUserContainer from "./container/RankingAllUserContainer";

@inject("Store")
@observer
class RankingPage extends Component {
  render() {
    return (
      <div>
        <RankingAllUserContainer />
      </div>
    );
  }
}

export default RankingPage;
