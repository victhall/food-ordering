import { Fragment } from "react";
import classes from '../Layout/Header.module.css';

export default function Header(props) {
  return (
  <Fragment>

    <header className={classes.header}>
      <h1>Good Juice</h1>
      <button>Cart</button>
    </header>

  </Fragment>
  )
}