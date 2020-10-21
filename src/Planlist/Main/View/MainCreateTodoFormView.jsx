import React from "react";

const MainCreateTodoFormView = ({
  todoTitle,
  onChangeTitle,
  onCreateTodoModal,
  onEnterCreateTodoModal,
}) => {
  return (
    <div className="ui action input" style={{ width: "90%" }}>
      <input
        type="text"
        placeholder="오늘 할일을 적어보세요"
        value={todoTitle}
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
  );
};

export default MainCreateTodoFormView;
