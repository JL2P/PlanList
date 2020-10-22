import React from "react";
import { Icon, Button } from "semantic-ui-react";
const MainItemCover = ({ todoModel, onCofigModal }) => {
  return (
    <div className="todo__subitem">
      <Button style={{ padding: "1em", pointerEvents: "none" }}>
        <Icon name="star" color="yellow" />
        <b style={{ fontSize: "14px" }}>{todoModel.rating}</b>
      </Button>
      <Button
        style={{ padding: "1em" }}
        onClick={() => {
          onCofigModal(true);
        }}
      >
        <Icon name="plus" style={{ marginRight: "0", marginLeft: "0.5px" }} />
      </Button>
    </div>
  );
};

export default MainItemCover;
