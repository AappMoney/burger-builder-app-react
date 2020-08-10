import React from 'react';
import './MenuBtn.css'

const MenuBtn = (props) => {
  return (
    <div onClick={props.openClick} className="MenuBtn">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default MenuBtn;