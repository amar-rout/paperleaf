import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Footer from './Component/Footer/Footer';
// import Navbar from './Component/Navbar/Navbar';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
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

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}>
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
