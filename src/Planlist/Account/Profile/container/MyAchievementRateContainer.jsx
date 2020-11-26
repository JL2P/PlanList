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
  componentDidMount() {
    const { heat } = this.props;
    // const { point } = this.props.Store;
    // 유저의 모든 점수 조회
    // point.allPoints(id);
    // const pointObj = point.getMyPoints;
  }

  hi = {
    // configBar: {
    //   series: [
    //     {
    //       type: "column",
    //       name: "Other",
    //       data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    //     },
    //   ],
    // },

    configMap: {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
      },

      title: {
        text: "매일 매일 완료한 달성률을 확인해 보세요.",
      },

      xAxis: {
        // labels: {
        //   enable: false,
        // },
        // type: "category",
        categories: [
          "Alexander",
          "Marie",
          "Maximilian",
          "Sophia",
          "Lukas",
          "Maria",
          "Leon",
          "Anna",
          "Tim",
          "Laura",
        ],
        // title: { text: "hi" },
      },

      yAxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        title: null,
      },

      // 색상 지정
      colorAxis: {
        min: 0,
        minColor: "#FFFFFF",
        maxColor: Highcharts.getOptions().colors[0],
      },

      // 달성률 바
      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280,
      },

      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.series.xAxis.categories[this.point.x] +
            "</b> sold <br><b>" +
            this.point.value +
            "</b> items on <br><b>" +
            this.series.yAxis.categories[this.point.y] +
            "</b>"
          );
        },
      },

      // 데이터
      series: [
        {
          name: "Sales per employee",
          borderWidth: 1,
          data: [
            [0, 0, 10],
            [0, 1, 19],
            [0, 2, 8],
            [0, 3, 8],
            [0, 4, 24],
            [0, 5, 67],
            [1, 0, 92],
            [1, 1, 58],
            [1, 1, 58],
            [1, 2, 78],
            [1, 3, 500],
            [1, 4, 48],
            [2, 0, 35],
            [2, 1, 15],
            [2, 1, 15],
            [2, 2, 123],
            [2, 3, 64],
            [2, 4, 52],
            [3, 0, 72],
            [3, 1, 132],
            [3, 2, 114],
            [3, 2, 114],
            [3, 3, 19],
            [3, 4, 16],
            [4, 0, 38],
            [4, 1, 5],
            [4, 2, 8],
            [4, 2, 8],
            [4, 3, 117],
            [4, 4, 115],
            [5, 0, 88],
            [5, 1, 32],
            [5, 1, 32],
            [5, 2, 12],
            [5, 3, 6],
            [5, 4, 120],
            [6, 0, 13],
            [6, 1, 44],
            [6, 2, 88],
            [6, 3, 98],
            [6, 3, 98],
            [6, 4, 96],
            [7, 0, 31],
            [7, 1, 1],
            [7, 2, 82],
            [7, 3, 32],
            [7, 3, 32],
            [7, 4, 30],
            [8, 0, 85],
            [8, 1, 97],
            [8, 2, 123],
            [8, 3, 64],
            [8, 3, 64],
            [8, 4, 84],
            [9, 0, 47],
            [9, 1, 114],
            [9, 2, 31],
            [9, 3, 48],
            [9, 3, 48],
            [9, 4, 91],
          ],

          // 데이터 수치 표시
          dataLabels: {
            enabled: true,
            color: "#000000",
          },
        },
      ],
    },
  };
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
