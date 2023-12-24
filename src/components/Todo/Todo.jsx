import React from 'react'
import FeatherIcon from 'feather-icons-react'
const Todo = () => {
    return (
<div className='todos-todo'>
    <div className='todo-icon'>
    <FeatherIcon icon="circle"/>    
     </div>
    <div className='todo-text'> مهمه 1</div>
    <div className='todo-cta'>
        <div className='todo-cta-edit'>
            <FeatherIcon icon="edit"/>
        </div>
        <div className='todo-cta-delete'> 
        <FeatherIcon icon="trash-2"/>
        </div>
    </div>

</div>
    )
}

export default Todo