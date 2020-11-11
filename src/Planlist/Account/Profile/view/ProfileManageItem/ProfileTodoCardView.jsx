import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import MainItemConfigCotainer from "../../../../Main/Container/MainItemConfigCotainer";
import MainItemInfoContainer from "../../../../Main/Container/MainItemInfoContainer";
import MainItemCover from "../../../../Main/View/MainItem/MainItemCover";
import TodoUpdateContainer from "../../../../todo/container/TodoUpdateContainer";
import "./ProfileTodoCardView.scss";

const ProfileTodoCardView = ({ todo, selectedTodo, onLikeButton }) => {
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
      <MainItemInfoContainer
        todo={todo}
        open={itemInfoOpen}
        onModal={onInfoModal}
      />
      {/* <MainItemCover
        todoModel={todo}
        onCofigModal={onCofigModal}
        onLikeButton={onLikeButton}
      /> */}
      <Card
        onClick={() => onInfoModal(true)}
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          height: "300px",
        }}
      >
        <Image
          className="ProfileTodoCard__image"
          src={todo.imgUrl}
          wrapped
          ui={false}
        />
        <Card.Content>
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

          <Button basic size="mini">
            시작 {todo.created ? todo.created.substring(0, 10) : "0000-00-00"}
          </Button>
          <Button basic size="mini" color="yellow">
            종료 {todo.endTime}
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfileTodoCardView;
