import React from 'react'
import FeatherIcon from 'feather-icons-react'
const TodoForme = () => {
  return (
    <div className='todos-form'>
        <div className='todos-form-icon'>
          <FeatherIcon icon='circle'/>
        </div>
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