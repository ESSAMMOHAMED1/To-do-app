import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='todos-list'>
      {props.todos.map((todo)=>(
        <Todo todo={todo} key={todo.id} toggelTodo={props.toggelTodo}/>
      ))}
    </div>
  )
}

export default Todos