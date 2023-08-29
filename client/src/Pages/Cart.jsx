import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../app/cartSlice.jsx';
import { Button } from '../components/Button.jsx';
import { Form } from '../components/Form.jsx';


const getCartItemsWithQuantities = (cartItems) => {
  return cartItems.reduce((accumulator, cartItem) => {
    const existingCartItem = accumulator.find(item => item.itemName === cartItem.itemName);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      const newItem = { ...cartItem, quantity: 1 };
      accumulator.push(newItem);
    }

    return accumulator;
  }, []);
};


export const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart)

  const cartItems = getCartItemsWithQuantities(cart);

  const purchaseHandler = (product) => {
    dispatch(removeToCart(product))
  }
  const AddPurchases = (product) => {
    dispatch(addToCart(product))
  }




  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className='text-lg font-medium'>Shopping Cart</h1>
        <div className="border-black border-2"></div>
        {cartItems.map((item, index) => (
          <ul key={index}>
            <li className='flex flex-wrap p-4 sm:justify-center lg:justify-center'>
              <div className="p-2 justify-center">
                <img className='object-contain h-48 w-96 mx-auto object-center hover:opacity-75 hover:scale-110' src={item.itemImage} alt={item.itemName} />
              </div>
              <div className="p-2 w-full h-auto sm:w-1/2 lg:w-1/3 md:w-1/2">
                <div>Product - {item.itemName}</div>
                <div>Price - {item.itemPrice}</div>
                <div>Quantity:{item.quantity}</div>
                <div className='flex space-x-4'>
                  <Button onClick={() => AddPurchases(item)}>Add to cart</Button>
                  <Button onClick={() => purchaseHandler(item)}>Remove from cart</Button>
                </div>
              </div>
            </li>
          </ul>
        ))}
        <div className={`text-lg font-medium p-6 ${cartItems.length === 0 ? "block" : "hidden"}`}>Your Cart is empty</div>
        <div className="border-black border-2"></div>
        <div className='flex justify-between flex-wrap mt-2'>
          <div className='text-lg font-medium mb-2'>Subtotal ({cartItems.length} Items) ${total}</div>
        </div>
        {cartItems.length > 0 ? (<Form cartItems={cartItems} />) : null}
      </div>
    </div>
  )
}

export default Cart