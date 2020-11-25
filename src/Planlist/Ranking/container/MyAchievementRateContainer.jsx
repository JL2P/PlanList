import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MyAchievementRateView from "../view/MyAchievementRateView";

class MyAchievementRateContainer extends Component {
  render() {
    return (
      <div>
        <MyAchievementRateView />
      </div>
    );
  }
}

export default MyAchievementRateContainer;
