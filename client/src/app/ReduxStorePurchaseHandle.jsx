import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';




export const reduxStore = (product) => {
    const dispatch = useDispatch();

    const purchaseHandler = (product) => {
        let fullDescription = product
        const itemName = fullDescription.title
        const itemPrice = fullDescription.price
        const itemImage = fullDescription.images[0]
        let itemObj = { itemName, itemPrice, itemImage };
        dispatch(addToCart(itemObj))
    }
    return { purchaseHandler }
}

