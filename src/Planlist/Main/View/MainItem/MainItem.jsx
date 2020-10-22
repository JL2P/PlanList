import React from "react";
import { Card, Image, Icon, Label } from "semantic-ui-react";

const MainItem = ({ todoModel, onInfoModal }) => {
  return (
    <div className="todo__item" onClick={() => onInfoModal(true)}>
      <Card style={{ width: "100%", marginTop: "1em" }} raised>
        <Image src={todoModel.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{todoModel.title}</Card.Header>
          <Card.Description>{todoModel.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "0.5em" }}>
              <Icon name="user" />
              {todoModel.name}
            </div>
            <div
              style={{
                marginRight: "0.5em",
              }}
            >
              <Card.Meta>
                <Label basic color="teal" style={{ marginRight: "0.5em" }}>
                  <Icon name="clock outline" style={{ marginRight: "0.5em" }} />
                  {todoModel.startTime}
                </Label>

                <Label basic color="red">
                  <Icon name="clock outline" style={{ marginRight: "0.5em" }} />
                  {todoModel.endTime}
                </Label>
              </Card.Meta>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default MainItem;
