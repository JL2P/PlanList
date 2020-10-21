import React, { useState } from "react";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";
import "./itemStyle.css";
import MainItemInfoModalView from "./MainItemInfoModalView";
import MainItemConfigModalView from "./MainItemConfigModalView";
import TodoUpdateModalView from "../../../todo/view/TodoUpdateModalView";
const MainItemView = ({ todoModel, onUpdateTodo }) => {
  // Item 정보 모달
  const [itemInfoOpen, setItemInfoOpen] = useState(false);
  // Item 설정 모달
  const [itemConfigOpen, setItemConfigOpen] = useState(false);
  // todoUpdate 모달
  const [todoUpdateOpen, setTodoUpdateOpen] = useState(false);

  const onInfoModal = (trigger) => {
    setItemInfoOpen(trigger);
  };

  const onCofigModal = (trigger) => {
    setItemConfigOpen(trigger);
  };

  const onTodoUpdateModal = (trigger) => {
    // 이전에 열려있는 모달 닫기
    if (itemConfigOpen) {
      setItemConfigOpen(false);
      // todoUpdate 모달 열기
      setTodoUpdateOpen(true);
    } else {
      setTodoUpdateOpen(trigger);
    }
  };

  return (
    <div>
      <TodoUpdateModalView
        open={todoUpdateOpen}
        onModal={onTodoUpdateModal}
        onUpdateTodo={onUpdateTodo}
        todo={todoModel}
      />
      <MainItemConfigModalView
        open={itemConfigOpen}
        onModal={onCofigModal}
        onTodoUpdateModal={onTodoUpdateModal}
      />
      <MainItemInfoModalView
        item={todoModel}
        open={itemInfoOpen}
        onModal={onInfoModal}
      />
      <div className="todo">
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
            <Icon
              name="plus"
              style={{ marginRight: "0", marginLeft: "0.5px" }}
            />
          </Button>
        </div>
        {/* div로 감싼 이유는 시멘틱의Card에서 onClick을 주면 카드가 움직이기 때문! */}
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
                      <Icon
                        name="clock outline"
                        style={{ marginRight: "0.5em" }}
                      />
                      {todoModel.startTime}
                    </Label>

                    <Label basic color="red">
                      <Icon
                        name="clock outline"
                        style={{ marginRight: "0.5em" }}
                      />
                      {todoModel.endTime}
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
