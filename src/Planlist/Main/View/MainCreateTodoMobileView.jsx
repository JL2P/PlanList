import React from "react";
import { Container, Header } from "semantic-ui-react";

const MainCreateTodoMobileView = ({
  title,
  onChangeTitle,
  onCreateTodoModal,
  onEnterCreateTodoModal,
}) => {
  return (
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

      <div className="ui action input" style={{ width: "90%" }}>
        <input
          type="text"
          placeholder="오늘 할일을 적어보세요"
          value={title}
          onChange={onChangeTitle}
          onKeyPress={onEnterCreateTodoModal}
        />
        <button
          className="ui icon inverted  button"
          onClick={() => {
            onCreateTodoModal(true);
          }}
        >
          <i aria-hidden="true" className="write icon"></i>
        </button>
      </div>
    </Container>
  );
};

export default MainCreateTodoMobileView;
