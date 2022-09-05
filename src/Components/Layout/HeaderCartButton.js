import { useContext } from "react";

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context";
import classes from './Header.module.css'

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.totalAmount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}