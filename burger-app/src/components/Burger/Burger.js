import React from 'react';
import BurgerIngrediend from './BurgerIngredient/BurgerIngredient'
import './Burger.css'

const burger = (props) => {

  let ingrediends = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])]
    .map((_, i) => {
      return <BurgerIngrediend key={igKey + i} type={igKey} />
    });
  }).reduce((pre, curr) => {
    return pre.concat(curr)
  }, []);

  if(ingrediends.length === 0) {
    ingrediends = <p>Please start adding ingrediends</p>
  }

  return (
    <div className="Burger">
      <BurgerIngrediend type="bread-top" />
      {ingrediends}
      <BurgerIngrediend type="bread-bottom" />
    </div>
  )
}

export default burger;