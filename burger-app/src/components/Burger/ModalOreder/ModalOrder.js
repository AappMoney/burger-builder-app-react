import React from 'react';
import './ModalOrder.css'
import Aux from '../../../hoc/AuxC'
import ButtonCon from '../../UI/Button/Button'

const OrderModal = (props) => {
  const IngredientData = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}><span>{igKey}</span>: {props.ingredients[igKey]}</li>
  })

  return (
    <Aux>
      <h1>Your order data</h1>
      <p>you are complitly buy or pay the bill this burger</p>
      <ul>
        {IngredientData}
      </ul>
      <p><strong>Total payment cost: ${props.priceNum.toFixed(2)}</strong></p>
      <p>Continue to order burger ?</p>
      <ButtonCon clicked={props.closeModalHndler} classNa="canceldBtn">CANCEL</ButtonCon>
      <ButtonCon clicked={props.countinuepurcheseHandler} classNa="payBtn">PAY</ButtonCon>
    </Aux>
  )
}

export default OrderModal