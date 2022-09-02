import CartIcon from "../Cart/CartIcon"
import classes from './Header.module.css'

export default function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>3</span>
    </button>
  )
}