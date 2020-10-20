import React from "react";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";

const GroupItemView = ({item}) => {
  return (
    <div>
      <Card style={{ float:"left" }} raised>
        <Image src={item.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.title}</Card.Header>
          <Card.Description>{item.description}</Card.Description>
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
              {item.name}
            </div>
            <div
              style={{
                marginRight: "0.5em",
              }}
            >
              <Card.Meta>
                <Label basic color="teal" style={{ marginRight: "0.5em" }}>
                  <Icon name="clock outline" style={{ marginRight: "0.5em" }} />
                  {item.start_time}
                </Label>

                <Label basic color="red">
                  <Icon name="clock outline" style={{ marginRight: "0.5em" }} />
                  {item.end_time}
                </Label>
              </Card.Meta>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default GroupItemView;