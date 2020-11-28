import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "semantic-ui-react";
// require("highcharts/modules/variwide")(Highcharts);

const RankingAllUserView = ({ rankingForChart, rankingData }) => {
  console.log("따란~", rankingForChart);
  const sd = [];
  for (var i = 0; i < 10; i++) {
    sd.push({ x: i, y: i * 2 });
  }
  const options = {
    // chart: {
    //   type: "variwide",
    // },

    // title: {
    //   text: "Labor Costs in Europe, 2016",
    // },

    // subtitle: {
    //   text:
    //     'Source: <a href="http://ec.europa.eu/eurostat/web/' +
    //     'labour-market/labour-costs/main-tables">eurostat</a>',
    // },

    // xAxis: {
    //   type: "category",
    // },

    // caption: {
    //   text: "Column widths are proportional to GDP",
    // },

    // legend: {
    //   enabled: false,
    // },

    // series: [
    //   {
    //     name: "Labor Costs",
    //     data: [
    //       ["Norway", 50.2, 335504],
    //       ["Denmark", 42, 277339],
    //       ["Belgium", 39.2, 421611],
    //       ["Sweden", 38, 462057],
    //       ["France", 35.6, 2228857],
    //       ["Netherlands", 34.3, 702641],
    //       ["Finland", 33.2, 215615],
    //       ["Germany", 33.0, 3144050],
    //       ["Austria", 32.7, 349344],
    //       ["Ireland", 30.4, 275567],
    //       ["Italy", 27.8, 1672438],
    //       ["United Kingdom", 26.7, 2366911],
    //       ["Spain", 21.3, 1113851],
    //       ["Greece", 14.2, 175887],
    //       ["Portugal", 13.7, 184933],
    //       ["Czech Republic", 10.2, 176564],
    //       ["Poland", 8.6, 424269],
    //       ["Romania", 5.5, 169578],
    //     ],
    //     // 그래프 위에 값 표시
    //     dataLabels: {
    //       enabled: true,
    //       format: "{point.y}",
    //     },
    //     tooltip: {
    //       pointFormat:
    //         "Labor Costs: <b>€ {point.y}/h</b><br>" +
    //         "GDP: <b>€ {point.z} million</b><br>",
    //     },
    //     colorByPoint: true,
    //   },
    // ],
    /*********************/
    chart: {
      type: "column",
    },
    title: {
      text: "Browser market shares. January, 2018",
    },
    subtitle: {
      text:
        'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    },
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
        text: "Total percent market share",
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

    // tooltip: {
    //   headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    //   pointFormat:
    //     '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    // },

    series: [
      {
        name: "Browsers",
        colorByPoint: false,
        data: rankingData,
        // data: [
        //   {
        //     // name: "Chrome",
        //     x: 1,
        //     y: 62.74,
        //     // drilldown: "Chrome",
        //     // color: "FFFFFF",
        //   },
        //   {
        //     // name: "Chrome",
        //     x: 2,
        //     y: 100,
        //     // drilldown: "Chrome",
        //     color: "FFFFFF",
        //   },
        //   {
        //     // name: "Firefox",
        //     y: 10.57,
        //     color: "",
        //     x: 3,
        //     // drilldown: "Firefox",
        //   },
        // ],
      },
    ],
    // drilldown: {
    //   series: [
    //     {
    //       name: "Chrome",
    //       id: "Chrome",
    //       data: [
    //         ["v65.0", 0.1],
    //         ["v64.0", 1.3],
    //         ["v63.0", 53.02],
    //         ["v62.0", 1.4],
    //         ["v61.0", 0.88],
    //         ["v60.0", 0.56],
    //         ["v59.0", 0.45],
    //         ["v58.0", 0.49],
    //         ["v57.0", 0.32],
    //         ["v56.0", 0.29],
    //         ["v55.0", 0.79],
    //         ["v54.0", 0.18],
    //         ["v51.0", 0.13],
    //         ["v49.0", 2.16],
    //         ["v48.0", 0.13],
    //         ["v47.0", 0.11],
    //         ["v43.0", 0.17],
    //         ["v29.0", 0.26],
    //       ],
    //     },
    //     {
    //       name: "Firefox",
    //       id: "Firefox",
    //       data: [
    //         ["v58.0", 1.02],
    //         ["v57.0", 7.36],
    //         ["v56.0", 0.35],
    //         ["v55.0", 0.11],
    //         ["v54.0", 0.1],
    //         ["v52.0", 0.95],
    //         ["v51.0", 0.15],
    //         ["v50.0", 0.1],
    //         ["v48.0", 0.31],
    //         ["v47.0", 0.12],
    //       ],
    //     },
    //     {
    //       name: "Internet Explorer",
    //       id: "Internet Explorer",
    //       data: [
    //         ["v11.0", 6.2],
    //         ["v10.0", 0.29],
    //         ["v9.0", 0.27],
    //         ["v8.0", 0.47],
    //       ],
    //     },
    //     {
    //       name: "Safari",
    //       id: "Safari",
    //       data: [
    //         ["v11.0", 3.39],
    //         ["v10.1", 0.96],
    //         ["v10.0", 0.36],
    //         ["v9.1", 0.54],
    //         ["v9.0", 0.13],
    //         ["v5.1", 0.2],
    //       ],
    //     },
    //     {
    //       name: "Edge",
    //       id: "Edge",
    //       data: [
    //         ["v16", 2.6],
    //         ["v15", 0.92],
    //         ["v14", 0.4],
    //         ["v13", 0.1],
    //       ],
    //     },
    //     {
    //       name: "Opera",
    //       id: "Opera",
    //       data: [
    //         ["v50.0", 0.96],
    //         ["v49.0", 0.82],
    //         ["v12.1", 0.14],
    //       ],
    //     },
    //   ],
    // },
  };
  return (
    <Container style={{ width: "900px", marginTop: "3em" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

export default RankingAllUserView;
