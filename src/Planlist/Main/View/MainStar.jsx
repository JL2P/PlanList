import React from "react";
const url = "/images/main/star.svg";
const starSize = "15";

const MainStar = ({ x, y, transform }) => {
  return (
    <image
      href={url}
      width={starSize}
      height={starSize}
      aria-label="star"
      x={x}
      y={y}
      transform={transform}
    />
  );
};

export default MainStar;
