import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CartContextComponent from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextComponent>
      <App />
    </CartContextComponent>
  </StrictMode>
);
