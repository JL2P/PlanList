import React from "react";
import { Image } from "semantic-ui-react";
import badgeIcon from "../../../../Ranking/badgeData";

const Badge = ({ myLevel }) => {
  return (
    <>
      <Image
        src={badgeIcon[myLevel - 1].imgUrl}
        spaced="left"
        verticalAlign="middle"
        // size="tiny"
        width={"30px"}
      />
      <span style={{ fontSize: "10px" }}>{badgeIcon[myLevel - 1].level}</span>
    </>
  );
};

export default Badge;
