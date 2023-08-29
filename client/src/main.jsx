// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit';

// Import the main application component
import App from './App';

// Import the Redux store configuration
import { store } from './app/store';

// Import styles
import './index.css';

const authProviderConfig = {
  authType: 'cookie',
  authName: '_auth',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


const renderApp = () => {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <AuthProvider {...authProviderConfig}>
          <App />
        </AuthProvider>
      </React.StrictMode>
    </Provider>
  );
};


renderApp();
