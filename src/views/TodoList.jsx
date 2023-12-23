import React from 'react'
import TodoForme from '../components/Todo/TodoForme'
import Todos from '../components/Todo/Todos'

const TodoList = () => {
  return (
    <main>
    <div className='container'>
      <div className='todos'>
        <TodoForme/>
        <Todos />
    </div>
    </div>
    </main>
  )
}

export default TodoList