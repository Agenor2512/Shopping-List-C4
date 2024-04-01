import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterProvider } from "./context/RegisterContext";
import { AppProvider } from "./context/AppContext";

import App from "./App";
import SearchIngredients from "./pages/SearchIngredients";
import Register from "./pages/Register";
import LoginForm from "./components/LoginForm";
import { LoginProvider } from "./context/LoginContext";
import ShoppingList from "./pages/ShoppingList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/shoppinglist",
        element: <ShoppingList />,
      },

      {
        path: "/search",
        element: <SearchIngredients />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <RegisterProvider>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </RegisterProvider>
  </AppProvider>
);
