import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./ProfileTodoCardView.css";

const CardCover = ({ todoModel, onCofigModal, onLikeButton }) => {
  return (
    <div className="todo__subitem_2">
      <Button
        inverted
        basic
        icon
        // style={{ padding: "1em" }}
        onClick={() => {
          onCofigModal(true);
        }}
      >
        <Icon basic name="ellipsis horizontal"  />
      </Button>
    </div>
  );
};

export default CardCover;
