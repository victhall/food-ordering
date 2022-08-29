import { Fragment } from "react";
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import PlaceHolderImage from '../../assets/placeholder-image.png'

export default function Header(props) {
  return (
    <Fragment>

      <header className={classes.header}>
        <h1>Good Juice</h1>
        <HeaderCartButton />
      </header>

      <div className={classes['main-image']}>
        <img src={PlaceHolderImage} alt="Placeholder image"/>
      </div>

    </Fragment>
  )
}