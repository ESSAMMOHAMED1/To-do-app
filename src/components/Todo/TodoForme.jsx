import React from 'react'

const TodoForme = () => {
  return (
    <div className='todos-form'>
        <div className='todos-form-icon'></div>
        <div className='todos-form-input'>
            <input type="text" placeholder='اضف مهمه جديده'/>
        </div>
        <div className='todos-form-submit'>
            <button className='submit-btn'>اضافه</button>
        </div>
    </div>
  )
}

export default TodoForme