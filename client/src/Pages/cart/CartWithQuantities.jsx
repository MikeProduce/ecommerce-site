

//helper function to get cart items with quantities
export const getCartItemsWithQuantities = (cartItems) => {
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
