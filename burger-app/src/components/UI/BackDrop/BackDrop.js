import React from 'react';
import './BackDrop.css'

const BackDrop = (props) => {
  return props.isShow ? <div 
  onClick={props.cliced} 
className="backDrop"></div> : null;
}

export default BackDrop