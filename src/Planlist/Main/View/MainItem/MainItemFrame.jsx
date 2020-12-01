import React, { useState } from "react";

import "./itemStyle.css";
import TodoUpdateContainer from "../../../todo/container/TodoUpdateContainer";
import MainItemInfoContainer from "../../Container/MainItemInfoContainer";
import MainItemConfigCotainer from "../../Container/MainItemConfigCotainer";

import MainItem from "./MainItem";
import MainItemCover from "./MainItemCover";
const MainItemFrame = ({ loginId, todoModel, selectedTodo, onLikeButton }) => {
  // Item 정보 모달
  const [itemInfoOpen, setItemInfoOpen] = useState(false);
  // Item 설정 모달
  const [itemConfigOpen, setItemConfigOpen] = useState(false);
  // todoUpdate 모달
  const [todoUpdateOpen, setTodoUpdateOpen] = useState(false);

  const onInfoModal = (trigger) => {
    setItemInfoOpen(trigger);
    selectedTodo(todoModel);
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
    <div style={{ width: "100%" }}>
      <TodoUpdateContainer
        todo={todoModel}
        open={todoUpdateOpen}
        onModal={onTodoUpdateModal}
      />

      <MainItemConfigCotainer
        todo={todoModel}
        open={itemConfigOpen}
        onModal={onCofigModal}
        onTodoUpdateModal={onTodoUpdateModal}
      />

      <MainItemInfoContainer
        todo={todoModel}
        open={itemInfoOpen}
        onModal={onInfoModal}
        onLikeButton={onLikeButton}
      />

      <div className="todo">
        <MainItemCover
          todoModel={todoModel}
          onCofigModal={onCofigModal}
          onLikeButton={onLikeButton}
          loginId={loginId}
        />
        <MainItem todoModel={todoModel} onInfoModal={onInfoModal} />
      </div>
    </div>
  );
};

export default MainItemFrame;
