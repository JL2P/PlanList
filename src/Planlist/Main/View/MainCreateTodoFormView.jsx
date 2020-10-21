import React from "react";

const MainCreateTodoFormView = ({
  mainTodoTitle,
  onChangeMainTodoTitle,
  onCreateTodoModal,
  onEnterCreateTodoModal,
}) => {
  return (
    <div className="ui action input" style={{ width: "90%" }}>
      <input
        type="text"
        placeholder="오늘 할일을 적어보세요"
        value={mainTodoTitle}
        onChange={onChangeMainTodoTitle}
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
