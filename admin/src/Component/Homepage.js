import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from "./Navbar/Navbar";

import "./Homepage.css"
import Login from "./Login/Login";

const Homepage = ({ updateUser, loginUser }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isValidUser, setIsValidUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const userValidateURL = `${process.env.REACT_APP_SERVER_URL}api/users/validateToken`
    // const token = loginUser.token

    useEffect(() => {
        // if (!loginUser.user) {
        //     setIsLoading(false);
        //     navigate("/login")
        // }
        // else {
            axios.get(userValidateURL, { headers: { "Authorization": `Bearer ${loginUser.token}` } })
                .then((response) => {
                    setIsLoading(false);
                    setIsValidUser(true);
                    setErrorMessage("");
                    updateUser(response.data);
                })
                .catch(error => {
                    setErrorMessage("Your session got expired. Please login again to continue our service.")
                    setIsLoading(false);
                    updateUser({})
                    navigate("/login")
                })
        // }
        // }, [loggedInUser.token, navigate, updateUser, userValidateURL])
    }, [])

    return (
        <div className="homepage">
            {isLoading ?
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
                    <div className="spinner-grow spinner-grow-md mt-5" role="status">
                        <span className="sr-only visually-hidden">Loading...</span>
                    </div>
                    <h6>Loading...</h6>
                </div>
                :
                <>
                    {isValidUser ? <Navbar /> : <Login />}
                </>
            }
            {/* <Footer /> */}
        </div>
    )
}
export default Homepage;