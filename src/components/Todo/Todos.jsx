import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    
    <div className="todos-list">
      {props.todos.map((todo) => (
        <Todo
          mode={props.mode}
          todo={todo}
          key={todo.id}
          toggelTodo={props.toggelTodo}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      ))}
      {props.todos.length === 0 && (
        <h3 className="no-todos">لا توجد مهمام حاليه ...</h3>
      )}
    </div>
  );
};

export default Todos;
