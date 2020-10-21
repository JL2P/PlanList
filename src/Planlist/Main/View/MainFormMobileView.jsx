import React from "react";
import { Container, Header } from "semantic-ui-react";
import MainCreateTodoFormView from "./MainCreateTodoFormView";
import TodoUpdateView from "../../todo/view/TodoUpdateView";

const MainFormMobileView = ({ Media }) => {
  // todoUpdate 모달
  const [todoUpdateOpen, setTodoUpdateOpen] = React.useState(false);
  const onTodoUpdateModal = (trigger) => {
    // todoUpdate 모달 열기
    setTodoUpdateOpen(trigger);
  };
  return (
    <div style={{ background: "#1b1c1d" }}>
      <TodoUpdateView open={todoUpdateOpen} onModal={onTodoUpdateModal} />
      <Media at="mobile">
        <Container
          text
          textAlign="center"
          style={{ paddingTop: "1em", paddingBottom: "3em" }}
        >
          <Header
            as="h1"
            content="Put your plan into action."
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              color: "white",
            }}
          />

          <MainCreateTodoFormView />
        </Container>
      </Media>
    </div>
  );
};

export default MainFormMobileView;
