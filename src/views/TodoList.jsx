import React from "react";
import TodoForme from "../components/Todo/TodoForme";
import Todos from "../components/Todo/Todos";
import { useState } from "react";
import Header from "../components/Todo/Header";
const TodoList = () => {
  const initialData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  const [Todes, setTodes] = useState(initialData);
  const [mode, setMode] = useState("add");
  const [activeTodo, setActiveTodo] = useState(null);
  const setToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(Todes));
  }
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
    if (mode !== "edit") {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false,
      };
      setTodes((data) => {
        return [newTodo, ...data];
      });
    } else if (mode === "edit") {
      const newTodos = Todes.map((t) => {
        if (t.id === activeTodo.id) {
          t.title = title;
        }
        return t;
      });
      setTodes(newTodos);
      setMode('add')
    }
  };

  const toggelMode = () => {
    if(mode==='edit'){
      return;
    }
    if (mode === "filter") {
      setMode("add");
    } else {
      setMode("filter");
    }
  };

  const editTodo = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };

  let currentTodos = [...Todes];
  if (mode === "edit" && activeTodo) {
    currentTodos = [activeTodo];
  }
  if (mode === "filter") {
    currentTodos = Todes.filter((td) => !td.done);
  }

  setToLocal();
  return (
    <>
   <Header Todes={Todes}/>
    <main>
      <div className="container">
        <div className="todos">
          <TodoForme
            activeTodo={activeTodo}
            mode={mode}
            addTodo={addTodo}
            toggelMode={toggelMode}
          />
          <Todos
            mode={mode}
            todos={currentTodos}
            toggelTodo={toggelTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
    </>
  );
};

export default TodoList;
