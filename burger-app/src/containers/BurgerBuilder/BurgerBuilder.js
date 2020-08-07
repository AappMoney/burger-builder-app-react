import React, { Component } from 'react';
import Aux from '../../hoc/AuxC';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal';
import ModalOrder from '../../components/Burger/ModalOreder/ModalOrder'

const INGREDIENT_PRICES = {
  meat: 1.2,
  cheese: 0.7,
  tomato: 0.4,
  salad: 0.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    ModalMenu: false,
  }

  clickedHandler = () => {
    this.setState({ModalMenu: true});
  }

  purchasableContinueHandler = () => {
    alert('Your are continue!')
  }

  closeClicedHandler = () => {
    this.setState({ModalMenu: false});
  }

  updatePurchasable(ingredients) {
    const purches = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    }).reduce( (sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: purches > 0})
  }

  addInHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const upadateCount = oldCount + 1;
    const updateingredients = {
      ...this.state.ingredients
    }
    updateingredients[type] = upadateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice,ingredients: updateingredients});
    this.updatePurchasable(updateingredients)
  }

  removeInHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0) return;
    
    const upadateCount = oldCount - 1;
    const updateingredients = {
      ...this.state.ingredients
    }
    updateingredients[type] = upadateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updateingredients});
    this.updatePurchasable(updateingredients)
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>

          <Modal closeCliced={this.closeClicedHandler} transform={this.state.ModalMenu}>
            <ModalOrder
              priceNum={this.state.totalPrice}
              countinuepurcheseHandler={this.purchasableContinueHandler}
              closeModalHndler={this.closeClicedHandler} 
              ingredients={this.state.ingredients} />
          </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
        clicked={this.clickedHandler}
        removeIn={this.removeInHandler}
        addIn={this.addInHandler}
        disabled={disabledInfo}
        price={this.state.totalPrice}
        priceNum={INGREDIENT_PRICES}
        ingredinNum={this.state.ingredients}
        purchesable={this.state.purchasable}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;