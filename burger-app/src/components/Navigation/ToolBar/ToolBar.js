import React from 'react';
import './ToolBar.css';
import Logo from '../../LOGO/Logo';
import NavBar from '../NavBar/NavBar'

const ToolBar = (props) => {
  return (
    <div className="ToolBar">
      <Logo />
      <nav>
        <NavBar />
      </nav>
    </div>
  )
}

export default ToolBar;