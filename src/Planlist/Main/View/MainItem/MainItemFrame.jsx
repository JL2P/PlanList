import React, { useState } from "react";

import "./itemStyle.css";
import MainItemInfoModalView from "./MainItemInfoModalView";
import MainItemConfigModalView from "./MainItemConfigModalView";
import TodoUpdateContainer from "../../../todo/container/TodoUpdateContainer";

import MainItem from "./MainItem";
import MainItemCover from "./MainItemCover";
const MainItemFrame = ({ todoModel }) => {
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
      <TodoUpdateContainer
        todo={todoModel}
        open={todoUpdateOpen}
        onModal={onTodoUpdateModal}
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
        <MainItemCover todoModel={todoModel} onCofigModal={onCofigModal} />
        <MainItem todoModel={todoModel} onInfoModal={onInfoModal} />
      </div>
    </div>
  );
};

export default MainItemFrame;
