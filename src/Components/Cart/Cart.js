import classes from './Cart.module.css'

export default function Cart(props) {
  const cartItems = <ul className={classes['cart-items']}>{[
    {
      id: 'j1',
      name: 'After Party',
      amount: 2,
      price: 7.50
    }].map((item) => <li>{item.name}</li>)}</ul>

  return <div>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--all']}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
    <div></div>
  </div>
};

