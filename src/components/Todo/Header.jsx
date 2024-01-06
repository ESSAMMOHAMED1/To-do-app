import React from 'react'

const Header = (props) => {
  return (
    <header>
       <h1>  قائمه المهام ({props.Todes.length}) </h1>  
    </header>
  )
}

export default Header