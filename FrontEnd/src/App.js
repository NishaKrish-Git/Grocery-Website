import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import Category from "./Components/Category/Category";

import { Review } from "./Components/Review/Review";
import { Contact } from "./Components/Contact Us/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/signIn/SignUp";
import { ToastContainer, toast } from "react-toastify";
import { SignUpRouter } from "./Components/signIn/SignUpRouter";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import { CheckOut } from "./Components/Chcekout/CheckOut";
import Order from "./Components/Order/Order";
import "./Styles/style.css";
import AllProduct from "./Components/AllProducts/AllProducts";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import SearchProducts from "./Components/SearchProducts/SearchProducts";
import { Feedback } from "./Components/Feedback/Feedback";
import { Signin } from "./Components/signIn/Signin";
import { PageNotFound } from "./Components/404 Page/PageNotFound";
import WishList from "./Components/wishList/WishList";

const App = () => {
  return (
    <>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/reviewCustomers" element={<Review />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signIn" element={<SignUpRouter />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/orders" element={<Order />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/products" element={<AllProduct />}></Route>
          <Route path="/signup" element={<Signin />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route
            path="/searchproducts/:search"
            element={<SearchProducts />}
          ></Route>
          <Route
            path="/categoryproducts/:category"
            element={<CategoryProducts />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
