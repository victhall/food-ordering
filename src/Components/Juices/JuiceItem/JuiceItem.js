import { useContext } from 'react';

import classes from './JuiceItem.module.css'
import JuiceItemForm from './JuiceItemForm'
import CartContext from '../../../store/cart-context';

export default function JuiceItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      totalAmount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.drink}>

      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <JuiceItemForm onAddToCart={addToCartHandler} />
      </div>

    </li>
  )
}