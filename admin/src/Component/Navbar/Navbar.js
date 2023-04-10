import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import './Navbar.css';
// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaBars, FaUser } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { logout } from "../../App/features/adminAuthSlice";

const Navbar = () => {
  return (
    <main className="d-flex flex-nowrap">
      <Sidebar />
    </main>
  );
};
export default Navbar;
// export default memo(Navbar);