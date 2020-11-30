import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Container } from "semantic-ui-react";

import ReactHighmaps from "react-highcharts/ReactHighmaps";
import Highcharts from "highcharts";

const MyAchievementRateView = ({ heat, dailyList }) => {
  const hi = {
    configMap: {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
      },

      title: {
        text: "매일 매일 나의 점수를 확인해 보세요.",
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
          var col = [];
          for (var k = 19; k > -1; k--) {
            col.push(k);
          }
          var row = [6, 5, 4, 3, 2, 1, 0];
          var index = col.indexOf(this.point.x) * 7 + row.indexOf(this.point.y);
          return (
            "<b>날짜 : " +
            dailyList[index].substring(0, 4) +
            "년 " +
            dailyList[index].substring(5, 7) +
            "월 " +
            dailyList[index].substring(8, 10) +
            "일" +
            "</b><br><b>점수 : " +
            this.point.value +
            "</b> 점 <b>"

            // "<b>" +
            // this.series.xAxis.categories[this.point.x] +
            // "</b> sold <br><b>" +
            // this.point.value +
            // "</b> 점 <br><b>" +
            // this.series.yAxis.categories[this.point.y] +
            // "</b>"
          );
        },
      },

      // 데이터
      series: [
        {
          name: "Sales per employee",
          borderWidth: 1,
          data: heat,
          // 데이터 수치 표시
          dataLabels: {
            enabled: false,
            color: "#000000",
          },
        },
      ],
    },
  };

  return (
    <div>
      <Container style={{ width: "900px", marginTop: "2em" }}>
        {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}

        {/* <ReactHighmaps config={config} constructorType={"chart"} /> */}
        <ReactHighmaps config={hi.configMap} constructorType={"chart"} />
      </Container>
    </div>
  );
};

export default MyAchievementRateView;
