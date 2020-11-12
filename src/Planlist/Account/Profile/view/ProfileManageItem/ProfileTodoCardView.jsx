import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import MainItemConfigCotainer from "../../../../Main/Container/MainItemConfigCotainer";
import MainItemInfoContainer from "../../../../Main/Container/MainItemInfoContainer";
import MainItemCover from "../../../../Main/View/MainItem/MainItemCover";
import TodoUpdateContainer from "../../../../todo/container/TodoUpdateContainer";
import "../../../../Main/View/MainItem/itemStyle.css";

import "./ProfileTodoCardView.scss";

const ProfileTodoCardView = ({
  todo,
  selectedTodo,
  onLikeButton,
  onComplete,
  onIncomplete,
}) => {
  // Item 정보 모달
  const [itemInfoOpen, setItemInfoOpen] = useState(false);
  // Item 설정 모달
  const [itemConfigOpen, setItemConfigOpen] = useState(false);
  // todoUpdate 모달
  const [todoUpdateOpen, setTodoUpdateOpen] = useState(false);

  const onInfoModal = (trigger) => {
    setItemInfoOpen(trigger);
    selectedTodo(todo);
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
      {/* <TodoUpdateContainer
        todo={todo}
        open={todoUpdateOpen}
        onModal={onTodoUpdateModal}
      />
      <MainItemConfigCotainer
        todo={todo}
        open={itemConfigOpen}
        onModal={onCofigModal}
        onTodoUpdateModal={onTodoUpdateModal}
      /> */}

      {/* todo 상세정보 모달 */}
      <MainItemInfoContainer
        todo={todo}
        open={itemInfoOpen}
        onModal={onInfoModal}
      />

      {/* todo Cover */}
      <div className="todo">
        {/* <MainItemCover
          todoModel={todo}
          onCofigModal={onCofigModal}
          onLikeButton={onCofigModal}
        /> */}

        <div className="todo__item">
          <Card
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              height: "300px",
            }}
          >
            <Image
              onClick={() => onInfoModal(true)}
              className="ProfileTodoCard__image"
              src={todo.imgUrl}
              wrapped
              ui={false}
            />
            <Card.Content onClick={() => onInfoModal(true)}>
              <Card.Header
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {todo.title}
              </Card.Header>
              <Card.Description
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {todo.description}
              </Card.Description>
              {/* <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta> */}
            </Card.Content>
            <Card.Content extra>
              <Icon name="clock outline" />

              <Button
                basic
                size="mini"
                style={{ width: "117px", textAlign: "center" }}
              >
                시작&nbsp;
                {todo.created
                  ? todo.created.substring(0, 10)
                  : todo.modified.substring(0, 10)}
              </Button>
              {todo.completed === "N" ? (
                <Button
                  style={{ width: "117px", textAlign: "center" }}
                  size="mini"
                  animated="vertical"
                  color="yellow"
                  basic
                  onClick={() => onComplete(todo.todoId)}
                >
                  <Button.Content hidden>
                    <Icon name="check" />
                    완료하기
                  </Button.Content>
                  <Button.Content visible>
                    종료&nbsp;{todo.endTime}
                  </Button.Content>
                </Button>
              ) : (
                <Button
                  size="mini"
                  animated="vertical"
                  color="yellow"
                  style={{ width: "117px" }}
                  onClick={() => onIncomplete(todo.todoId)}
                >
                  완료
                </Button>
              )}
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileTodoCardView;
