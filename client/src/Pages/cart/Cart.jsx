import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../../app/cartSlice';
import { Form } from '../../components/Form';
import { getCartItemsWithQuantities } from './CartWithQuantities';
import { CartHeader } from './cart-components/CartHeader';
import { CartItem } from './cart-components/CartItem';
import { EmptyCartMessage } from './cart-components/EmptyCartMessage';
import { CartTotal } from './cart-components/CartTotal';
import { CartWrapper } from './cart-components/CartWrapper';

export const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  const cartItems = getCartItemsWithQuantities(cart);

  const purchaseHandler = (product) => {
    dispatch(removeToCart(product));
  };

  const AddPurchases = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <CartWrapper>
      <CartHeader />
      <ul>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            AddPurchases={AddPurchases}
            purchaseHandler={purchaseHandler}
          />
        ))}
      </ul>
      <EmptyCartMessage isEmpty={cartItems.length === 0} />
      <div className="border-black border-2"></div>
      <CartTotal cartItemCount={cartItems.length} total={total} />
      {cartItems.length > 0 ? <Form cartItems={cartItems} /> : null}
    </CartWrapper>
  );
};

export default Cart;
