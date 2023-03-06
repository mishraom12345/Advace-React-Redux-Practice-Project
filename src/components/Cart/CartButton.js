import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/UiSlice';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartitems = useSelector(state=>state.cart.totalQuantity)
  const toggleHandler = ()=>{
    dispatch(uiAction.toggle())

  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartitems}</span>
    </button>
  );
};

export default CartButton;
