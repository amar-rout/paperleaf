import React from "react";
import { Link, Outlet, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

import { useSelector } from 'react-redux';

import {
    selectUser
} from "../../../app/userSlice";

import {
    getCartCount
} from "../../../app/cartSlice";

import {
    getWishlistCount
} from "../../../app/wishlistSlice";

import "./Navbar.css";

const Navbar = () => {

    const loginUser = useSelector(selectUser);
    const cartCount = useSelector(getCartCount);
    const wishlistCount = useSelector(getWishlistCount);

    const navigate = useNavigate()

    return (
        <>
            {/* <header className="bg-warning bg-opacity-50 text-center p-1">
                <div className="container p-1 text-dark">
                    <span className="top-header-text">
                        Get FLAT Rs. 250 off on your 1st order. Use code <span className="text-dark fw-bold ls-1"><u>FIRSTBUY</u></span>
                        <span className="d-none d-md-inline"> | Free shipping on order above Rs 2500 within India |Worldwide Shipping | COD Available</span>
                    </span>
                </div>
            </header> */}
            {/* <header className="navbar-bg text-center p-1 d-sm">
                <div className="container p-1 text-dark">
                    <Link to="/" className="navbar-brand m-0 p-0 mb-2 mb-md-0">
                        <img src="/assets/images/logo/logo-1.png" alt="logo" className="nav-logo-img" />
                    </Link>
                </div>
            </header> */}
            <div className="sticky-top bg-dark">
                <nav className="navbar navbar-expand-lg navbar-body border-bottom" aria-label="Offcanvas navbar large">
                    <div className="container py-1">
                        {/* <div className="d-grid align-items-center" style={{ gridTemplateColumns: '1fr 1fr 8fr' }}> */}
                        <div className="d-flex flex-0 justify-content-between align-items-center w-100">
                            <div className="d-flex justify-content-start align-items-center">
                                <button className="navbar-toggler justify-content-center border-0 ps-1 align-items-center shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                                    {/* <span className="navbar-toggler-icon" style={{ width: '24px', height: '24px', color: 'white' }}></span> */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.75254 17.9997H21.2525C21.6668 17.9997 22.0025 18.3355 22.0025 18.7497C22.0025 19.1294 21.7204 19.4432 21.3543 19.4928L21.2525 19.4997H2.75254C2.33832 19.4997 2.00254 19.1639 2.00254 18.7497C2.00254 18.37 2.28469 18.0562 2.65077 18.0065L2.75254 17.9997H21.2525H2.75254ZM2.75254 11.5027H21.2525C21.6668 11.5027 22.0025 11.8385 22.0025 12.2527C22.0025 12.6324 21.7204 12.9462 21.3543 12.9959L21.2525 13.0027H2.75254C2.33832 13.0027 2.00254 12.6669 2.00254 12.2527C2.00254 11.873 2.28469 11.5592 2.65077 11.5095L2.75254 11.5027H21.2525H2.75254ZM2.75168 5.00293H21.2517C21.6659 5.00293 22.0017 5.33872 22.0017 5.75293C22.0017 6.13263 21.7195 6.44642 21.3535 6.49608L21.2517 6.50293H2.75168C2.33746 6.50293 2.00168 6.16714 2.00168 5.75293C2.00168 5.37323 2.28383 5.05944 2.64991 5.00978L2.75168 5.00293H21.2517H2.75168Z" fill="#fff3cd" />
                                    </svg>
                                </button>
                                <div className="offcanvas w-75 offcanvas-start bg-dark d-inline-block" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                                    <div className="offcanvas-header text-center">
                                        <h5 className="offcanvas-title text-light fw-normal fs-4" id="offcanvasNavbar2Label" style={{ color: '#fff3cd !important' }}>Paperleaf</h5>
                                        {/* <button type="button" className="btn-close btn-close-light" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                                    </div>
                                    <div className="offcanvas-body d-inline-block">
                                        <ul className="navbar-nav justify-content-start flex-grow-1 me-5">
                                            <li className="nav-item me-2 px-5 px-md-0 py-2 py-md-0 my-2 my-md-0 rounded-pill" data-bs-dismiss="offcanvas">
                                                <NavbarLink to="/" className="nav-link nav_home_link" aria-current="page" style={{ color: '#fff3cd' }}>Home</NavbarLink>
                                            </li>
                                            <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill" data-bs-dismiss="offcanvas">
                                                <NavbarLink to="/about" className="nav-link nav_home_link" aria-current="page" style={{ color: '#fff3cd' }}>About</NavbarLink>
                                            </li>
                                            {/* <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                                <NavbarLink to="/blog" className="nav-link" aria-current="page" style={{color: '#fff3cd'}}>Blog</NavbarLink>
                                            </li> */}
                                            <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill" data-bs-dismiss="offcanvas">
                                                <NavbarLink to="/privacy" className="nav-link nav_home_link" aria-current="page" style={{ color: '#fff3cd' }}>Privacy</NavbarLink>
                                            </li>
                                            <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill" data-bs-dismiss="offcanvas">
                                                <NavbarLink to="/contact" className="nav-link nav_home_link" aria-current="page" style={{ color: '#fff3cd' }}>Contact</NavbarLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-md-none text-center">
                                        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"
                                            className="btn btn-default bg-light fw-semibold">
                                            <i className="bi bi-x-lg me-2 mt-0"></i>
                                            <span>Close</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <img src="/assets/images/logo/logo-1.png" alt="logo" className="nav-logo-img" /> */}
                            <div className="d-flex justify-content-center align-items-center">
                                <img src="/assets/images/logo/logo-1.png" alt="logo" className="nav-logo-img" />
                                {/* <img src="/assets/images/logo/logo-2.png" alt="logo" className="nav-logo-img d-md-none me-2 mt-1" style={{ width: '32px', height: '32px' }} /> */}
                            </div>
                            <div className="d-flex justify-content-end align-items-right">
                                {/* <form action="/search" className="me-2" role="search">
                                    <div className="input-group ">
                                        <input className="form-control shadow-none rounded-0 rounded-pill rounded-end px-3" type="search" placeholder="Search for products" />
                                        <span className="input-group-append">
                                            <button className="btn border border-start-0 ms-n10 rounded rounded-pill rounded-start text-dark link-warning px-3" type="button">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z" fill="#212121" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </form> */}
                                <div className="d-flex ms-sm-2 justify-content-around align-items-center">
                                    {/* <button className="btn btn-sm p-1 me-2 me-sm-2 me-md-3" onClick={() => navigate("/wishlists")}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z" fill="#fff3cd" />
                                        </svg>
                                    </button> */}
                                    <button className="btn btn-sm position-relative p-1 me-2 me-sm-2 me-md-3" onClick={() => navigate("/wishlists")}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912ZM19.3684 12.1206L12.0002 19.4842L4.63521 12.1191C3.12192 10.6058 3.12192 8.15232 4.63521 6.63904C6.14849 5.12575 8.602 5.12575 10.1153 6.63904L11.4727 7.99648C11.7706 8.29435 12.2553 8.28854 12.5459 7.98363L13.8806 6.63978C15.3977 5.12268 17.8528 5.12268 19.3699 6.63978C20.8836 8.15343 20.881 10.5997 19.3684 12.1206Z" fill="#fff3cd" />
                                        </svg>
                                        {wishlistCount === 0 ? "" :
                                            <span className="position-absolute top-0 start-100 translate-middle mt-2 px-1 bg-warning-subtle rounded-pill text-dark">
                                                {wishlistCount}
                                            </span>
                                        }
                                    </button>
                                    <button className="btn btn-sm position-relative p-1 me-2 me-sm-2 me-md-3" onClick={() => navigate("/carts")}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z" fill="#fff3cd" />
                                        </svg>
                                        {cartCount === 0 ? "" :
                                            <span className="position-absolute top-0 start-100 translate-middle mt-2 px-1 bg-warning-subtle rounded-pill text-dark">
                                                {cartCount}
                                            </span>
                                        }
                                    </button>

                                    {!loginUser ?
                                        <>
                                            <a href="/login" className="d-block link-dark text-decoration-none ms-2 me-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.7545 14.0002C18.9966 14.0002 20.0034 15.007 20.0034 16.2491V16.8245C20.0034 17.7188 19.6838 18.5836 19.1023 19.263C17.5329 21.0965 15.1457 22.0013 12.0004 22.0013C8.8545 22.0013 6.46849 21.0962 4.90219 19.2619C4.32242 18.583 4.00391 17.7195 4.00391 16.8267V16.2491C4.00391 15.007 5.01076 14.0002 6.25278 14.0002H17.7545ZM17.7545 15.5002H6.25278C5.83919 15.5002 5.50391 15.8355 5.50391 16.2491V16.8267C5.50391 17.3624 5.69502 17.8805 6.04287 18.2878C7.29618 19.7555 9.26206 20.5013 12.0004 20.5013C14.7387 20.5013 16.7063 19.7555 17.9627 18.2876C18.3117 17.8799 18.5034 17.361 18.5034 16.8245V16.2491C18.5034 15.8355 18.1681 15.5002 17.7545 15.5002ZM12.0004 2.00488C14.7618 2.00488 17.0004 4.24346 17.0004 7.00488C17.0004 9.76631 14.7618 12.0049 12.0004 12.0049C9.23894 12.0049 7.00036 9.76631 7.00036 7.00488C7.00036 4.24346 9.23894 2.00488 12.0004 2.00488ZM12.0004 3.50488C10.0674 3.50488 8.50036 5.07189 8.50036 7.00488C8.50036 8.93788 10.0674 10.5049 12.0004 10.5049C13.9334 10.5049 15.5004 8.93788 15.5004 7.00488C15.5004 5.07189 13.9334 3.50488 12.0004 3.50488Z" fill="#fff3cd" />
                                                </svg>
                                            </a>
                                        </>
                                        :
                                        <>
                                            <div className="dropdown position-relative ms-2 me-2">
                                                <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src="/assets/images/user-thumbnail.jpg" alt="mdo" width="24" height="24" className="rounded-circle" />
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end my-3 text-small shadow text-overflow-hidden">
                                                    <li>
                                                        <h5 className="dropdown-header header-dropdown-item">
                                                            <span className="fs-6 fw-bold">{loginUser.name}</span><br />
                                                            <span className="fs-6 fw-normal"><small>{loginUser.email}</small></span>
                                                        </h5>
                                                    </li>
                                                    <li className="mx-2"><hr className="dropdown-divider text-muteed" /></li>
                                                    <li>
                                                        <Link to="/user/profile" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-user' style={{ fontSize: "16px" }}></i></span>
                                                            My Profile
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/user/address" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-target-lock' style={{ fontSize: "16px" }}></i></span>
                                                            My Address
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/user/orders" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-book' style={{ fontSize: "16px" }}></i></span>
                                                            My Orders
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/user/trackOrder" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bxs-truck' style={{ fontSize: "16px" }}></i></span>
                                                            Track My Order
                                                        </Link>
                                                    </li>
                                                    <li className="mx-2"><hr className="dropdown-divider text-muteed" /></li>
                                                    <li>
                                                        <Link to="/user/settings" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-cog' style={{ fontSize: "16px" }}></i></span>
                                                            Notifications & Settings
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/user/help" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-question-mark' style={{ fontSize: "16px" }}></i></span>
                                                            Need Help
                                                        </Link>
                                                    </li>
                                                    {/* <li className="mx-2"><hr className="dropdown-divider text-muteed" /></li> */}
                                                    {/* <li>
                                                        <Link onClick={logoutHandler} className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                            <span className="p-0 pe-2 pt-1">
                                                                <i className='bx bx-log-out-circle' style={{ fontSize: "16px" }}></i>
                                                            </span>
                                                            Signout
                                                        </Link>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <header className="bg-warning-subtle top-0 py-1 shadow-sm">
                    <div className="container nav-scroller">
                        <nav className="nav navcat-link position-relative pt-1" aria-label="Secondary navigation">
                            {/* <NavCatLink className="nav-link ps-0 pe-4" to="/category/browseAll">All products</NavCatLink> */}
                            <NavCatLink className="nav-link ps-0 pe-4" to="/category/newCollections">
                                New Collections
                                <span className="position-absolute badge text-danger fw-bold translate-middle top-25 start-75 fw-normal"><small>New</small></span>
                            </NavCatLink>
                            {/* <NavCatLink className="nav-link ps-0 pe-4" to="/category/kurtis">Kurti/Sets</NavCatLink> */}
                            <NavCatLink className="nav-link ps-0 pe-4" to="/category/Dupattas">Dupattas</NavCatLink>
                            {/* <NavCatLink className="nav-link ps-0 pe-4" to="/category/Dress">Dress</NavCatLink> */}
                            <NavCatLink className="nav-link ps-0 pe-4" to="/category/DressMaterial">Dress Material</NavCatLink>
                            <NavCatLink className="nav-link ps-0 pe-4" to="/category/Fabrics">Fabrics</NavCatLink>
                            <NavCatLink className="nav-link ps-0 pe-4" to="/category/Jewellery">Jewellery</NavCatLink>
                        </nav>
                    </div>
                </header>
            </div>
            <Outlet />
        </>
    );
}

function NavbarLink({ to, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <span className={isActive ? "active" : ""}>
            <Link to={to} {...props}></Link>
        </span>
    )
}

function NavCatLink({ to, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <span className={isActive ? "active" : ""}>
            <Link to={to} {...props}></Link>
        </span>
    )
}

export default Navbar;
