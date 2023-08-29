import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import router from "./router/Routes"
import { store } from './app/store';
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider
        authType="cookie"
        authName="access_token"
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);
