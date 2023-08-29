import { Button } from "../../../components/Button";





export const CartItem = ({ item, AddPurchases, purchaseHandler }) => (
    <li className='flex flex-wrap p-4 sm:justify-center lg:justify-center'>
        <div className="p-2 justify-center">
            <img
                className='object-contain h-48 w-96 mx-auto object-center hover:opacity-75 hover:scale-110'
                src={item.itemImage}
                alt={item.itemName}
            />
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
);

