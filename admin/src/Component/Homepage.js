import React from "react"
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar/Navbar"
// import Footer from "./Footer/Footer";

import "./Homepage.css"
// import Login from "./Login/Login";
import { useEffect } from "react";
// import Login from "./Login/Login";

const Homepage = () => {

    const loggedUser = JSON.parse(localStorage.getItem('admin_user'));
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedUser && loggedUser === "") {
            navigate('/login');
        }
    });
    // const navigate = useNavigate();
    return (
        <div className="homepage">
            {/* { loggedUser && loggedUser !== "" ? <Navbar /> : <Login /> } */}
            <Navbar />
            {/* <Footer /> */}
        </div>
    )
}
export default Homepage;