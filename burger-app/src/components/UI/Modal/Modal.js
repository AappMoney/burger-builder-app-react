import React from 'react';
import Aux from '../../../hoc/AuxC'
import BackDrop from '../BackDrop/BackDrop';

import './Modal.css'

const Modal = (props) => {
  return (
    <Aux>
      <BackDrop cliced={props.closeCliced}  isShow={props.transform} />
      <div style={{
        transform: props.transform ? `translateY(0)` : `translateY(-200vh)`
      }} className="Modal">
        {props.children}
      </div>
    </Aux>
  )
}

export default Modal