import React from "react";
import FeatherIcon from "feather-icons-react";
const Todo = ({ todo, toggelTodo , deleteTodo,editTodo,mode}) => {
  return (
    <div className={`todos-todo ${todo.done ? "done" : ""}`}>
      <div className="todo-icon" onClick={() => toggelTodo(todo.id)}>   
        <FeatherIcon icon={todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo-text">{todo.title}</div>
     { mode !== 'edit' && (<div className="todo-cta">
        <div className="todo-cta-edit" onClick={() => editTodo(todo)}>
          <FeatherIcon icon="edit" />
        </div>
        <div className="todo-cta-delete" onClick={()=>deleteTodo(todo.id)}>
          <FeatherIcon icon="trash-2"/>
        </div>
      </div>)}
    </div>
  );
};

export default Todo;
