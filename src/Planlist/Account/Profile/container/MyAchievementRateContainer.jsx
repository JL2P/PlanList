import React, { Component } from "react";
import MyAchievementRateView from "../view/MyAchievementRateView";

import Highcharts from "highcharts";
import { inject, observer } from "mobx-react";

Highcharts.setOptions({
  colors: ["#FFB517"],
});

@inject("Store")
@observer
class MyAchievementRateContainer extends Component {
  render() {
    const { heat, dailyList } = this.props;
    return (
      <div>
        <MyAchievementRateView heat={heat} dailyList={dailyList} />
      </div>
    );
  }
}

export default MyAchievementRateContainer;
