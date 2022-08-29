import classes from './AvailableJuices.module.css'
import JuiceItem from './JuiceItem/JuiceItem';

const DUMMY_JUICES = [
  {
    id: 'j1',
    name: 'After Party',
    description: 'activated charcoal - alkaline water - lemon - maple syrup - cayenne',
    size: '250ml',
    price: 7.50
  },
  {
    id: 'j2',
    name: 'Blu Majik',
    description: 'blu majik algae - pineapple - stevia - lime - alkaline water',
    size: '250ml',
    price: 7.50
  },
  {
    id: 'j3',
    name: 'The Good',
    description: 'Cucumber, Green Lettuce, Spinach, Celery, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass, Himalayan Salt',
    size: '250ml',
    price: 7.50
  },
  {
    id: 'j4',
    name: 'Genius',
    description: 'Cucumber, Pineapple, Apple, Celery, Spinach, Kale, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass, Himalayan Salt',
    size: '250ml',
    price: 7.50,
  },
  {
    id: 'j5',
    name: 'Farma-C',
    description: 'Grapefruit, Orange, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass, Cayenne Extract',
    size: '250ml',
    price: 7.50,
  }
];

export default function AvailableJuices() {
  const drinksList = DUMMY_JUICES.map((juice) => 
  <JuiceItem
  key={juice.id} 
  name={juice.name} 
  description={juice.description} 
  price={juice.price}/>)

  return <section className={classes.drinks}>
    <ul>
      {drinksList}
    </ul>
  </section>
}