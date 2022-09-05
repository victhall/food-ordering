import { useRef, useState } from 'react';

import classes from './JuiceItem.module.css'
import Input from '../../../UI/Input'

export default function JuiceItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };

  return <form className={classes.form} onSubmit={submitHandler}>
    <Input
      ref={amountInputRef}
      input={{
        id: 'amount_' + props.id, // <= creates a unique id 
        type: 'number',
        min: '1',
        max: '20',
        step: '1',
        defaultValue: '1'
      }} />
    <button>Add To Cart</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
  </form>
}