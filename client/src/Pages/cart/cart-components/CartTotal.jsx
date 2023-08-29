export const CartTotal = ({ cartItemCount, total }) => (
    <div className='flex justify-between flex-wrap mt-2'>
        <div className='text-lg font-medium mb-2'>Subtotal ({cartItemCount} Items) ${total}</div>
    </div>
);
