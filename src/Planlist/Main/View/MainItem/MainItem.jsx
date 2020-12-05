import React from "react";
import { Card, Image, Icon, Label } from "semantic-ui-react";

const MainItem = ({ todoModel, onInfoModal }) => {
  return (
    <div className="todo__item" onClick={() => onInfoModal(true)}>
      <Card style={{ width: "100%", marginTop: "1em" }} raised>
        <Image
          src={
            todoModel.galleries.length > 0
              ? todoModel.galleries[0].filePath
              : todoModel.imgUrl
          }
          wrapped
          ui={false}
        />
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
            <div>
              <Image
                src={
                  todoModel.accountModel
                    ? todoModel.accountModel.galleries.length > 0
                      ? todoModel.accountModel.galleries[0].filePath
                      : todoModel.accountModel.imgUrl
                    : ""
                }
                bordered
                centered
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <b style={{ fontSize: "18px", marginLeft: "0.5em" }}>
                {todoModel.writer}
              </b>
              {todoModel.groupAt === "Y" && (
                <Label basic color="orange" style={{ marginLeft: "1em" }}>
                  <b>그룹</b>
                </Label>
              )}
            </div>
            <div
              style={{
                marginRight: "0.5em",
              }}
            >
              <Card.Meta>
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
