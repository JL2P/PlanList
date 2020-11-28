import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "semantic-ui-react";
// require("highcharts/modules/variwide")(Highcharts);

const RankingAllUserView = ({
  rankingForChart,
  rankingData,
  myRank,
  loginId,
}) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `${loginId} 회원님, 계획 달성률 상위 ${myRank}에 들었습니다`,
    },
    // subtitle: {
    //   text:
    //     'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    // },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      minPadding: 0.5,
      maxPadding: 0.5,
      type: "category",
    },
    yAxis: {
      title: {
        text: "구간 별 평균 점수",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0, // 간격
        // borderWidth: 0,
        dataLabels: {
          enabled: true,
          // format: "상위 {x}% 평균 {y} 점",
          format: "{y}",
        },
      },
    },

    series: [
      {
        name: "구간 평균 점수",
        colorByPoint: false,
        data: rankingData,
      },
    ],
  };
  return (
    <Container style={{ width: "900px", marginTop: "3em" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

export default RankingAllUserView;
