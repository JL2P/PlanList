import React, { useState } from "react";
import { Card, Image, Button, Icon, Label } from "semantic-ui-react";
import MainItemConfigCotainer from "../../../../Main/Container/MainItemConfigCotainer";
import MainItemInfoContainer from "../../../../Main/Container/MainItemInfoContainer";

import TodoUpdateContainer from "../../../../todo/container/TodoUpdateContainer";
// import "../../../../Main/View/MainItem/itemStyle.css";
import "./ProfileTodoCardView.css";
import CardCover from "./CardCover";

const ProfileTodoCardView = ({
  todo,
  selectedTodo,
  onComplete,
  onIncomplete,
  loginId,
  selectId,
  onAddPoint,
  onDeletePoint,
  onAddGroupPoint,
  onDeleteGroupPoint,
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
      <TodoUpdateContainer
        todo={todo}
        open={todoUpdateOpen}
        onModal={onTodoUpdateModal}
      />

      <MainItemConfigCotainer
        todo={todo}
        open={itemConfigOpen}
        onModal={onCofigModal}
        onTodoUpdateModal={onTodoUpdateModal}
      />

      {/* todo 상세정보 모달 */}
      <MainItemInfoContainer
        todo={todo}
        open={itemInfoOpen}
        onModal={onInfoModal}
      />

      {/* todo Cover */}
      <div className="todo">
        <div className="todo__item_2">
          <Card
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              height: "300px",
            }}
          >
            <CardCover
              todoModel={todo}
              onCofigModal={onCofigModal}
              onLikeButton={onCofigModal}
              todo={todo}
              selectId={selectId}
              loginId={loginId}
            />
            <Image
              onClick={() => onInfoModal(true)}
              className="ProfileTodoCard__image"
              src={todo.imgUrl}
              wrapped
              ui={false}
            ></Image>
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
            </Card.Content>
            <Card.Content extra>
              <Icon name="clock outline" />
              {/* {todo.groupAt === "Y" && (
                <Label
                  basic
                  color="orange"
                  style={{ marginLeft: "1em", marginRight: "1em" }}
                >
                  <b>그룹계획</b>
                </Label>
              )}
              {todo.groupAt !== "Y" && (
                <Label
                  basic
                  color="green"
                  style={{ marginLeft: "1em", marginRight: "1em" }}
                >
                  <b>개인계획</b>
                </Label>
              )} */}
              <Button
                basic
                size="mini"
                style={{ width: "118px", textAlign: "center" }}
              >
                시작 &nbsp;
                {todo.startTime}
              </Button>

              {/* 완료하기 버튼은 로그인된 사용자의 마이페이지에서만 활성화 */}
              {loginId === todo.writer ? (
                // 로그인된 유저가 todo 작성자이면 완료하기 버튼을 활성화
                todo.completed === "N" ? (
                  <Button
                    style={{ width: "118px", textAlign: "center" }}
                    size="mini"
                    animated="vertical"
                    color="yellow"
                    basic
                    onClick={() => {
                      onComplete(todo.todoId);
                      onAddPoint({
                        accountId: loginId,
                        likeCount: todo.likePoint,
                        todoId: todo.todoId,
                      });
                    }}
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
                    style={{ width: "118px" }}
                    onClick={() => {
                      onIncomplete(todo.todoId);
                      onDeletePoint(loginId, todo.todoId);
                    }}
                  >
                    <Icon name="check" />
                    완료
                  </Button>
                )
              ) : // todo 작성자가 아니면 버튼 비활성화
              todo.completed === "N" ? (
                <Button
                  style={{ width: "118px", textAlign: "center" }}
                  size="mini"
                  animated="vertical"
                  color="yellow"
                  basic
                >
                  종료&nbsp;{todo.endTime}
                </Button>
              ) : (
                <Button
                  size="mini"
                  animated="vertical"
                  color="yellow"
                  style={{ width: "118px" }}
                >
                  <Icon name="check" />
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
