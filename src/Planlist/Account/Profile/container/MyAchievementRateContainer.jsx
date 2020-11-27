import React, { Component } from "react";
import MyAchievementRateView from "../view/MyAchievementRateView";

// import ReactHighcharts from "react-highcharts";
import ReactHighmaps from "react-highcharts/ReactHighmaps";
import Highcharts from "highcharts";
import { inject, observer } from "mobx-react";

Highcharts.setOptions({
  colors: [
    "#FFB517",
    "#058DC7",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
  ],
});

@inject("Store")
@observer
class MyAchievementRateContainer extends Component {
  render() {
    const { heat } = this.props;
    return (
      <div>
        {/* <MyAchievementRateView /> */}
        {/* <ReactHighmaps
          config={this.state.configMap}
          constructorType={"chart"}
        /> */}
        {/* <MyAchievementRateView config={this.hi.configMap} /> */}
        <MyAchievementRateView heat={heat} />
      </div>
    );
  }
}

export default MyAchievementRateContainer;
