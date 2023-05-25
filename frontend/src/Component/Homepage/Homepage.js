import React from "react"

import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer";

import "./Homepage.css"

const Homepage = (user) => {
    return (
        <div className="homepage">
            <Navbar />
            <Footer />
        </div>
    )
}
export default Homepage;