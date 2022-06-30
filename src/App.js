import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Login from "./Pages/LogReg/Login";
import Register from "./Pages/LogReg/Register";
import Cart from "./Pages/Cart/Cart";
import React, { useEffect, useState } from "react";
import Success from "./Pages/Cart/Success";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Annocment from "./components/Annocment/Annocment";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import { emptyCart, mergeUserCart } from "./Redux/cartSlice";


function App() {
  const user = useSelector(state => state.user.userToken);
  const userCart = useSelector(state => state.user.userCart)
  const [show, setShow] = useState(true)
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    if (["/Register", "/Login"].includes(location.pathname)) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location])
  useEffect(() => {
    userCart && dispatch(mergeUserCart(userCart));
    // !userCart && dispatch(emptyCart());
  }, [userCart])


  return (
    <div>
      {show ?
        <>
          <Annocment />
          <Navbar />
        </> : ""}
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/Login" element={user ? <Navigate to='/' replace /> : <Login />}></Route>
        <Route path="/Register" element={user ? <Navigate to='/' replace /> : <Register />}></Route>
      </Routes>
      {show ?
        <>
          <NewsLetter />
          <Footer />
        </> : ""}

    </div>

  );
}

export default App;
