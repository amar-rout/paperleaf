import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

// import Slider from "react-slick";
// Bootstrap CSS
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

// React-tostify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Homepage from './Component/Homepage/Homepage';
import ComingSoon from './Component/Homepage/pages/ComingSoon/ComingSoon';
import Home from './Component/Homepage/pages/Home/Home';
import Cart from './Component/Homepage/pages/Cart/Cart';
import Login from './Component/Homepage/pages/Login/Login';
import Register from './Component/Homepage/pages/Register/Register';
import ForgotPassword from './Component/Homepage/pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Component/Homepage/pages/ResetPassword/ResetPassword';
import Wishlist from './Component/Homepage/pages/Wishlist/Wishlist';
import About from './Component/Homepage/pages/About/About';
import Blog from './Component/Homepage/pages/Blog/Blog';
import Contact from './Component/Homepage/pages/Contact/Contact';
import Privacy from './Component/Homepage/pages/Privacy/Privacy';
import Shipping from './Component/Homepage/pages/Shipping/Shipping';
import Returning from './Component/Homepage/pages/Returning/Returning';
// import Category from './Component/Homepage/pages/Category/Category';
import Search from './Component/Homepage/pages/Search/Search';
import User from './Component/Homepage/pages/User/User';
import UserOrders from './Component/Homepage/pages/User/UserOrders/UserOrders';
import UnderConstruction from './Component/Homepage/UnderConstruction/UnderConstruction';
import Help from './Component/Homepage/pages/Help/Help';
import UserProfile from './Component/Homepage/pages/User/UserProfile/UserProfile';
import UserAddress from './Component/Homepage/pages/User/UserAddress/UserAddress';
import AddAddress from './Component/Homepage/pages/User/UserAddress/AddAddress';
import EditAddress from './Component/Homepage/pages/User/UserAddress/EditAddress';
import UserNotification from './Component/Homepage/pages/User/UserNotification/UserNotification';
import UserPayment from './Component/Homepage/pages/User/UserPayment/UserPayment';
import UserSetting from './Component/Homepage/pages/User/UserSetting/UserSetting';
// import Checkout from './Component/Homepage/pages/Checkout/Checkout';
// import CheckoutDetails from './Component/Homepage/pages/Checkout/CheckoutDetails';
import Products from './Component/Homepage/pages/Products/Products';
import CategoryItems from './Component/Homepage/pages/Category/CategoryItems/CategoryItems';
import TermsConditions from './Component/Homepage/pages/TermsConditions/TermsConditions';
import CheckoutNew from './Component/Homepage/pages/Checkout/CheckoutNew';
import OrderSuccess from './Component/Homepage/pages/Checkout/OrderSuccess';

// import CheckoutDetails from './Component/Homepage/pages/Checkout/CheckoutDetails';


const PageNotFound = () => {
  return (
    <div className="container my-5">
      <div className="text-center my-5 p-5 py-md-5">
        <h1>404 Error</h1>
        <p>Sorry, the page you're looking for cannot be found</p>
      </div>
    </div>
  );
};

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/returning" element={<Returning />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/category" element={<Category />} /> */}
            <Route exact path="/category/:id" element={<CategoryItems />} />
            {/* <Route exact path="/category/:id/page/:id" element={<CategoryItems />} /> */}
            <Route path="products/:id" element={<Products />}/>
            <Route path="user" element={<User />}>
              <Route index element={<UserProfile />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="orders" element={<UserOrders />} />
              <Route path="address" element={<UserAddress />} />
              <Route path="addAddress" element={<AddAddress />} />
              <Route path="editAddress" element={<EditAddress />} />
              <Route path="notifications" element={<UserNotification />} />
              <Route path="settings" element={<UserSetting />}/>
              <Route path="paymentMethods" element={<UserPayment />} />
              <Route path="*" element={<ComingSoon />} />
            </Route>
            <Route path="/carts" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutNew />} />
            <Route path="/checkout/success" element={<OrderSuccess />} />
            <Route path="/wishlists" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/passwordReset" element={<ResetPassword />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="help" element={<Help />} />
            <Route path="faqs" element={<Help />} />
            <Route path="termsConditions" element={<TermsConditions />} />
          </Route>
          <Route path="underConstruction" element={<UnderConstruction />} />
          <Route path="noMatch" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </div>
  );
}

export default App;

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;
