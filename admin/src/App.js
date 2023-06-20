import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Footer from './Component/Footer/Footer';
// import Navbar from './Component/Navbar/Navbar';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';


// React-tostify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './Component/Homepage';
import Dashboard from './Component/Page/Dashboard/Dashboard';
import Products from './Component/Page/Products/Products';
import AddProduct from './Component/Page/Products/AddProduct';
import ProductDetails from './Component/Page/Products/ProductDetails';
import EditProduct from './Component/Page/Products/EditProduct';
import Category from './Component/Page/Category/Category';
import AddCategory from './Component/Page/Category/AddCategory';
import CategoryDetails from './Component/Page/Category/CategoryDetails';
import EditCategory from './Component/Page/Category/EditCategory';
import Coupons from './Component/Page/Coupons/Coupons';
import CouponsDetails from './Component/Page/Coupons/CouponsDetails';
import EditCoupons from './Component/Page/Coupons/EditCoupons';
import AddCoupons from './Component/Page/Coupons/AddCoupons';
import Orders from './Component/Page/Orders/Orders';
import OrderDetails from './Component/Page/Orders/OrderDetails';
import Users from './Component/Page/User/Users';
import UserDetails from './Component/Page/User/UserDetails';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import { useState, useEffect } from 'react';
import Collection from './Component/Page/Collections/Collection';
import ViewCollection from './Component/Page/Collections/ViewCollection';
import EditCollection from './Component/Page/Collections/EditCollection';
import AddCollection from './Component/Page/Collections/AddCollection';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";




function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setLoginUser] = useState({});

  // const navigate = useNavigate();

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("admin_user")))
    setIsLoading(false);
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("admin_user", JSON.stringify(user))
    setLoginUser(user);
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          isLoading ?
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
              <div className="spinner-grow spinner-grow-md mt-5" role="status">
                <span className="sr-only visually-hidden">Loading...</span>
              </div>
              <h6>Loading...</h6>
            </div>
            :
            user && user.email && user.token ?
              <Homepage updateUser={updateUser} loginUser={user} />
              :
              <Login updateUser={updateUser} />
              }
          >
          <Route exact path="/" element={<Homepage updateUser={updateUser} loginUser={user} />} />
          <Route index element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/category/:id/edit" element={<EditCategory />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/:id" element={<ViewCollection />} />
          <Route path="/collections/:id/edit" element={<EditCollection />} />
          <Route path="/addCollection" element={<AddCollection />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/coupons/:id" element={<CouponsDetails />} />
          <Route path="/coupons/:id/edit" element={<EditCoupons />} />
          <Route path="/addCoupons" element={<AddCoupons />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path='/login' element={<Login updateUser={updateUser} />} />
          <Route path='/register' element={<Register />} />
          </Route>
        {/* <Route path="/" element=<Homepage /> >
            <Route index element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:id" element={<CategoryDetails />} />
            <Route path="/category/:id/edit" element={<EditCategory />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/coupons/:id" element={<CouponsDetails />} />
            <Route path="/coupons/:id/edit" element={<EditCoupons />} />
            <Route path="/addCoupons" element={<AddCoupons />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Route> */}
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
