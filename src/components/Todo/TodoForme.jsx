import React from "react";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";
const TodoForme = ({ addTodo }) => {
  const [title, settitle] = useState("");

  const handelInputChange = (e) => {
    settitle(e.target.value);
  };

  const handelAddNewTodo = () => {
    if (!title.trim()) {
      return;
    }
    addTodo(title);
    settitle("");
  };
  return (
    <div className="todos-form">
      <div className="todos-form-icon">
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form-input">
        <input
          type="text"
          placeholder="اضف مهمه جديده"
          value={title}
          onChange={handelInputChange}
        />
      </div>
      <div className="todos-form-submit">
        <button
          className="submit-btn"
          disabled={!title.trim()}
          onClick={handelAddNewTodo}
        >
          اضافه
        </button>
      </div>
    </div>
  );
};

export default TodoForme;
