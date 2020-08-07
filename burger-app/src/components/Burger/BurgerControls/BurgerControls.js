import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import './BurgerControls.css'

const Controls = [
  { label: "Meat", type: "meat" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
]

const BurgerControls = (props) => {
  return (
    <div className="globalCon">
      <p className="totalPrice">Total price: <strong> ${props.price.toFixed(2)}</strong></p>
      {Controls.map(ctrl => {
      return <BurgerControl 
      btnDisabled={props.disabled[ctrl.type]}
      add={() => props.addIn(ctrl.type)}
      remove={() => props.removeIn(ctrl.type)}
      key={ctrl.type} 
      label={ctrl.label}
      priceNum={props.priceNum[ctrl.type]}
      ingredinNum={props.ingredinNum[ctrl.type]}/>
      })}

      <button onClick={props.clicked} disabled={!props.purchesable} className="orderBtn">Order now</button>
    </div>
  )
}

export default BurgerControls;