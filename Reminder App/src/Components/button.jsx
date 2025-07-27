import React from 'react'
import './button.css'
const button = (props) => {
  return (
     
      <button className='button' onClick={props.onclick} style={{backgroundColor:props.color}}>{props.content}</button>
 
  )
}

export default button