import React from 'react';
import './Button.css'

const ButtonCol = (props) => {
  return <button
            onClick={props.clicked}
            className={['btnStyle', props.classNa].join(' ')}>
              {props.children}
              </button>
}

export default ButtonCol