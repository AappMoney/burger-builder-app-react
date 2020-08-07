import React from 'react';
import './BurgerControl.css'

const BurgerControl = (props) => {
  return (
    <div className='flexCon'>
      <div className="itemFlex">
        <p>{props.ingredinNum}:</p>
        <p>{props.label}</p>
      </div>
      <div className="item">
        <button disabled={props.btnDisabled} className="btnLess" onClick={props.remove}>
          LESS
        </button>
      </div>
      <div className="item">
        <button className="btnMore" onClick={props.add}>
          MORE 
          <b className="priceColor">+${props.priceNum}</b>
        </button>
      </div>
    </div>

  )

}

export default BurgerControl;