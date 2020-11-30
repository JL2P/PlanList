import React from "react";
import { Container, Segment } from "semantic-ui-react";
import ReactHighmaps from "react-highcharts/ReactHighmaps";
import Highcharts from "highcharts";

Highcharts.setOptions({
  colors: ["#FFB517"],
});
const RankingHeatmapView = ({ heat, dailyList, loginId }) => {
  const hi = {
    configMap: {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1,
      },

      title: {
        text: "",
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
      <Container style={{ width: "900px", marginTop: "5em" }}>
        <h3 style={{ textAlign: "center" }}>
          매일 매일 {loginId} 님의 점수를 확인해 보세요.
        </h3>
        <Segment color="yellow">
          <ReactHighmaps config={hi.configMap} constructorType={"chart"} />
        </Segment>
      </Container>
    </div>
  );
};

export default RankingHeatmapView;
