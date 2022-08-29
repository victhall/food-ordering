import CartIcon from "../Cart/CartIcon"
import classes from './Header.module.css'

export default function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>3</span>
    </button>
  )
}