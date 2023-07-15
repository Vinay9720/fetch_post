import "./App.css";
import ResponsiveAppBar from "./pages/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Welcome from "./pages/welcome/Welcome";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Order from "./pages/Order/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
