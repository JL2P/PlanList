import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import MainCreateTodoFormView from "./MainCreateTodoFormView";
import TodoFormView from "../../todo/view/TodoFormView";

const MainFormDesktopView = ({ Media }) => {
  // todoUpdate 모달
  const [todoCreateOpen, setTodoCreateOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  const onCreateTodoModal = (trigger) => {
    // todoUpdate 모달 열기
    setTodoCreateOpen(trigger);
  };
  const onEnterCreateTodoModal = (e) => {
    if (e.key === "Enter") {
      // todoUpdate 모달 열기
      setTodoCreateOpen(true);
    }
  };

  //메인화면에서 title바꾼거 state에 저장하기
  const onChangeTitle = (e) => setTodoTitle(e.target.value);

  return (
    <div style={{ background: "#1b1c1d" }}>
      <TodoFormView
        open={todoCreateOpen}
        onModal={onCreateTodoModal}
        todoTitle={todoTitle}
        onChangeTitle={onChangeTitle}
      />
      <Media greaterThan="mobile">
        <Container
          text
          textAlign="center"
          style={{ paddingTop: "1em", paddingBottom: "3.5em" }}
        >
          <Header
            as="h5"
            content="Put your plan into action."
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              color: "white",
            }}
          />

          <MainCreateTodoFormView
            todoTitle={todoTitle}
            onChangeTitle={onChangeTitle}
            onCreateTodoModal={onCreateTodoModal}
            onEnterCreateTodoModal={onEnterCreateTodoModal}
          />
        </Container>
      </Media>
    </div>
  );
};

export default MainFormDesktopView;
