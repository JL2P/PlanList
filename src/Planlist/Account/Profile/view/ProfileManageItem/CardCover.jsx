import React from "react";
import { Icon, Button, Label } from "semantic-ui-react";
import "./ProfileTodoCardView.css";

const CardCover = ({ todoModel, onCofigModal, onLikeButton, todo }) => {
  return (
    <div>
      <div className="todo__groupAt">
        {todo.groupAt === "Y" ? (
          <Label
            basic
            color="orange"
            style={{ marginLeft: "1em", marginRight: "1em" }}
          >
            <b>그룹</b>
          </Label>
        ) : (
          <Label
            basic
            color="green"
            style={{ marginLeft: "1em", marginRight: "1em" }}
          >
            <b>개인</b>
          </Label>
        )}
      </div>
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
          <Icon basic name="ellipsis horizontal" />
        </Button>
      </div>
    </div>
  );
};

export default CardCover;
