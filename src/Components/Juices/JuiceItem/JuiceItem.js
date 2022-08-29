import classes from './JuiceItem.module.css'
import JuiceItemForm from './JuiceItemForm'

export default function JuiceItem(props) {
  const price = `${props.price.toFixed(2)}`

  return (
    <li className={classes.drink}>

      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <JuiceItemForm />
      </div>

    </li>
  )
}