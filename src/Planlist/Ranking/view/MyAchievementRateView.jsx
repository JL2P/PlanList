import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "semantic-ui-react";

const MyAchievementRateView = () => {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <div>
      <Container style={{ width: "900px", marginTop: "2em" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Container>
    </div>
  );
};

export default MyAchievementRateView;
