import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

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
import Category from './Component/Homepage/pages/Category/Category';
import Search from './Component/Homepage/pages/Search/Search';
import User from './Component/Homepage/pages/User/User';
import UserOrders from './Component/Homepage/pages/User/UserOrders/UserOrders';
import UnderConstruction from './Component/Homepage/UnderConstruction/UnderConstruction';
import Help from './Component/Homepage/pages/Help/Help';
import UserProfile from './Component/Homepage/pages/User/UserProfile/UserProfile';
import UserAddress from './Component/Homepage/pages/User/UserAddress/UserAddress';


const NoMatch = () => {
  return (
    <p>No Match</p>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/search" element={<Search />} />

            <Route path="category" element={<Category />}>
              <Route exact path=":id" element={<Category />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="user" element={<User />}>
              <Route index element={<UserProfile />} />
              <Route path="userProfile" element={<UserProfile />} />
              <Route path="userOrders" element={<UserOrders />} />
              <Route path="userAddress" element={<UserAddress />} />
              <Route path="*" element={<NoMatch />} />
            </Route>

            <Route path="/carts" element={<Cart />} />
            <Route path="/wishlists" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />

            <Route path="userProfile" element={<UserProfile />} />
            <Route path="help" element={<Help />} />
            <Route path="faqs" element={<Help />} />

          </Route>
          
          <Route path="underConstruction" element={<UnderConstruction />} />
          <Route path="noMatch" element={<NoMatch />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
    </HelmetProvider>
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
