import React from 'react';

function AppWrapper({ children }) {
    return (
        <div className="w-screen bg-gray-900 w-full overflow-x-hidden">
            {children}
        </div>
    );
}

export default AppWrapper;
