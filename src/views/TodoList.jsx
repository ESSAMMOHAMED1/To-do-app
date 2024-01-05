import React from "react";
import TodoForme from "../components/Todo/TodoForme";
import Todos from "../components/Todo/Todos";
import { useState } from "react";
const TodoList = () => {
  const initialData = [
    {
      id: 1,
      title: "do market",
      done: true,
    },
    {
      id: 2,
      title: "do study",
      done: false,
    },
    {
      id: 3,
      title: "do eat",
      done: true,
    },
    {
      id: 4,
      title: "do shower",
      done: false,
    },
  ];
  const [Todes, setTodes] = useState(initialData);

  const toggelTodo = (id) => {
    setTodes((data) => {
      const newData = data.map((td) => {
        if (td.id === id) {
          return { ...td, done: !td.done };
        }
        return td;
      });
      return newData;
    });
  };
  const deleteTodo = (id) => {
    setTodes((data) => {
      const newData = data.filter((td) => td.id !== id);
      return newData;
    });
  };
  const addTodo = (title) => {
    const newTodo = {
      id: new Date().getTime(),
      title,
      done: false,
    };
    setTodes((data) => {
      return [newTodo, ...data];
    });
  };
  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodoForme addTodo={addTodo} />
          <Todos
            todos={Todes}
            toggelTodo={toggelTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
