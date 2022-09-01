import classes from './JuiceItem.module.css'
import Input from '../../../UI/Input'

export default function JuiceItemForm(props) {

  return <form className={classes.form}>
    <Input input={{
      id: 'amount_' + props.id, // <= creates a unique id 
      type: 'number',
      min: '1',
      max: '20',
      step: '1',
      defaultValue: '1'
    }} />
    <button>Add To Cart</button>
  </form>
}