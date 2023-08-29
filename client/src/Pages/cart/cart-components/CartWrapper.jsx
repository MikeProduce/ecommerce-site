

export const CartWrapper = ({ children }) => (
    <div className="bg-white h-screen">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
        </div>
    </div>
);