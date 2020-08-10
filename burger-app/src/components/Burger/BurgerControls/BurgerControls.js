import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import './BurgerControls.css'

const Controls = [
  { label: "Salad-top", type: "saladTop" },
  { label: "Meat", type: "meat" },
  { label: "Tomato", type: "tomato" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad-bottom", type: "saladBottom" },
]

const BurgerControls = (props) => {
  return (
    <div className="globalCon">
      <div className="insideGlobal">
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
    </div>
  )
}

export default BurgerControls;