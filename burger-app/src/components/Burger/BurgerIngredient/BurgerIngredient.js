import React from 'react';
import propTypes from 'prop-types';
import './BurgerIngredient.css';

const BurgerIngredient = (props) => {
    let indredient = null;

    switch (props.type) {
      case ('bread-bottom'):
        indredient = <div className='breadBottom'></div>;
        break;
      case ('bread-top'):
        indredient = <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>;
        break;
      case ('meat'):
        indredient = <div className="Meat"></div>
        break;
      case ('cheese'):
        indredient = <div className="cheese"></div>
        break;
      case ('tomato'):
        indredient = <div className="Tomato">
          <div className='tomatoIn'></div>
          <div className='tomatoIn'></div>
        </div>
        break;
      case ('saladTop'):
        indredient = <div className="Salad"></div>
        break;
      case ('saladBottom'):
        indredient = <div className="Salad"></div>
      break;

      default:
        indredient = null;
        break;
    }

    return indredient;
}

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
}

export default BurgerIngredient;