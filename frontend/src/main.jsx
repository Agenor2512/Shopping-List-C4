import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterProvider } from "./context/RegisterContext";

import App from "./App";
import SearchIngredients from "./pages/SearchIngredients";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
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
  <RegisterProvider>
    <RouterProvider router={router} />
  </RegisterProvider>
);
