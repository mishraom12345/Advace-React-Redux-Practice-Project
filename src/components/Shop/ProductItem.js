import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/CartSlice';
const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, id ,description} = props;

  const addtocarthandler  = ()=>{
    dispatch(cartAction.addTocart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtocarthandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
