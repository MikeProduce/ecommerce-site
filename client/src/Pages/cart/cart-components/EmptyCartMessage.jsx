

export const EmptyCartMessage = ({ isEmpty }) => (
    <div className={`text-lg font-medium p-6 ${isEmpty ? "block" : "hidden"}`}>
        Your Cart is empty
    </div>
);