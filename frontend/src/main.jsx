import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ShoppingList from "./pages/ShoppingList";
import SearchIngredients from "./pages/SearchIngredients";
import ExistingIngredient from "./components/ExistingIngredient";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ShoppingList />,
      },
      {
        path: "/search",
        element: <SearchIngredients />,
      },
      {
        path: "/existing",
        element: <ExistingIngredient />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
