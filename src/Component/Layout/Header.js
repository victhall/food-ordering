import { Fragment } from "react";
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
  <Fragment>

    <header className={classes.header}>
      <h1>Good Juice</h1>
      <HeaderCartButton/>
    </header>

  </Fragment>
  )
}