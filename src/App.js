import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import
import { Navbar, Sidebar, Footer } from "./components";
// import styled from 'styled-components'
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  Error,
  Home,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
