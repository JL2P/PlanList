import React from "react";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";
import MainItemModelView from "./MainItemModelView";
import "./itemStyle.css";

const MainItemView = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const onSelected = () => {
    setOpen(true);
  };

  const onModal = (trigger) => {
    setOpen(trigger);
  };

  return (
    <div>
      <MainItemModelView item={item} open={open} onModal={onModal} />
      <div className="todo">
        <div className="todo__subitem">
          <Button style={{ padding: "1em", pointerEvents: "none" }}>
            <Icon name="star" color="yellow" />
            <b style={{ fontSize: "14px" }}>{item.rating}</b>
          </Button>
          <Button
            style={{ padding: "1em" }}
            onClick={() => {
              alert("point up click evnet");
            }}
          >
            <Icon
              name="plus"
              style={{ marginRight: "0", marginLeft: "0.5px" }}
            />
          </Button>
        </div>
        {/* div로 감싼 이유는 시멘틱의Card에서 onClick을 주면 카드가 움직이기 때문! */}
        <div className="todo__item" onClick={() => onSelected()}>
          <Card style={{ width: "100%", marginTop: "1em" }} raised>
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
                      <Icon
                        name="clock outline"
                        style={{ marginRight: "0.5em" }}
                      />
                      {item.start_time}
                    </Label>

                    <Label basic color="red">
                      <Icon
                        name="clock outline"
                        style={{ marginRight: "0.5em" }}
                      />
                      {item.end_time}
                    </Label>
                  </Card.Meta>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainItemView;
