import React from "react";
import { Link, Outlet, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

    const navigate = useNavigate()

    const clientURL = process.env.REACT_APP_CLIENT_URL;

    return (
        <>
            <header className="bg-warning bg-opacity-50 text-center p-1">
                <div className="container p-1 text-dark">
                    <span className="top-header-text">
                        Get FLAT Rs. 250 off on your 1st order. Use code <span className="text-dark fw-bold ls-1"><u>FIRSTBUY</u></span>
                        <span className="d-none d-md-inline"> | Free shipping on order above Rs 2500 within India |Worldwide Shipping | COD Available</span>
                    </span>
                </div>
            </header>
            <header className="navbar-bg text-center p-1">
                <div className="container p-1 text-dark">
                    <Link to="/" className="navbar-brand m-0 p-0 mb-2 mb-md-0">
                        <img src={clientURL + "/assets/images/logo/logo-1.png"} alt="logo" className="nav-logo-img" />
                    </Link>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-body border-bottom" aria-label="Offcanvas navbar large" style={{ backgroundColor: "" }}>
                <div className="container align-items-center justify-content-between py-1">
                    <div className="d-grid" style={{ gridTemplateColumns: '1fr 8fr' }}>
                        <div className="justify-content-between align-items-center">
                            <button className="navbar-toggler justify-content-center border-0 ps-1 mt-1 align-items-center shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                                <span className="navbar-toggler-icon" style={{ width: '24px', height: '24px', marginTop: '-4px' }}></span>
                            </button>
                            <div className="offcanvas offcanvas-start text-bg-dark bg-body d-inline-block" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-dark" id="offcanvasNavbar2Label">Paperleaf</h5>
                                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body d-inline-block">
                                    <ul className="navbar-nav justify-content-start flex-grow-1 me-5">
                                        <li className="nav-item me-2 px-5 px-md-0 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                            <NavbarLink to="/" className="nav-link" aria-current="page">Home</NavbarLink>
                                        </li>
                                        <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                            <NavbarLink to="/about" className="nav-link" aria-current="page">About</NavbarLink>
                                        </li>
                                        <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                            <NavbarLink to="/blog" className="nav-link" aria-current="page">Blog</NavbarLink>
                                        </li>
                                        <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                            <NavbarLink to="/privacy" className="nav-link" aria-current="page">Privacy</NavbarLink>
                                        </li>
                                        <li className="nav-item me-2 px-5 px-md-2 py-2 py-md-0 my-2 my-md-0 rounded-pill">
                                            <NavbarLink to="/contact" className="nav-link" aria-current="page">Contact</NavbarLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end align-items-right ms-md-4">
                            <form action="/search" className="me-2" role="search">
                                <div className="input-group ">
                                    <input className="form-control shadow-none rounded-0 rounded-pill rounded-end px-3" type="search" placeholder="Search for products" />
                                    <span className="input-group-append">
                                        <button className="btn border border-start-0 ms-n10 rounded rounded-pill rounded-start text-dark link-warning px-3" type="button">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                            <div className="d-flex ms-sm-2 justify-content-around align-items-center">
                                <button className="btn btn-sm position-relative p-1 me-1 me-sm-2 me-md-3" onClick={() => navigate("/wishlists")}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912ZM19.3684 12.1206L12.0002 19.4842L4.63521 12.1191C3.12192 10.6058 3.12192 8.15232 4.63521 6.63904C6.14849 5.12575 8.602 5.12575 10.1153 6.63904L11.4727 7.99648C11.7706 8.29435 12.2553 8.28854 12.5459 7.98363L13.8806 6.63978C15.3977 5.12268 17.8528 5.12268 19.3699 6.63978C20.8836 8.15343 20.881 10.5997 19.3684 12.1206Z" fill="#212121" />
                                    </svg>
                                    <span className="position-absolute badge bg-warning top-0 start-100 translate-middle mt-2 text-dark mt-2 p-1 rounded-circle"><small>05</small></span>
                                </button>
                                <button className="btn btn-sm position-relative p-1 me-1 me-sm-2 me-md-3" onClick={() => navigate("/carts")}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z" fill="#212121" />
                                    </svg>
                                    <span className="position-absolute badge bg-warning top-0 start-100 translate-middle mt-2 text-dark p-1 rounded-circle"><small>11</small></span>
                                </button>
                                <div className="dropdown position-relative ms-2">
                                    <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={clientURL + "/assets/images/user-thumbnail.jpg"} alt="mdo" width="24" height="24" className="rounded-circle" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end my-3 text-small shadow text-overflow-hidden">
                                        <li>
                                            <h5 className="dropdown-header header-dropdown-item">
                                                Amarendra Rout<br />
                                                <span className=""><small>amarendrarout34@gmail.com</small></span>
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
                                        <li className="mx-2"><hr className="dropdown-divider text-muteed" /></li>
                                        <li>
                                            <Link to="/logout" className="dropdown-item header-dropdown-item d-flex justify-content-start align-items-center">
                                                <span className="p-0 pe-2 pt-1">
                                                    <i className='bx bx-log-out-circle' style={{ fontSize: "16px" }}></i>
                                                </span>
                                                Signout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="sticky-top bg-body top-0 py-1 shadow-sm">
                <div className="container nav-scroller bg-body">
                    <nav className="nav navcat-link position-relative pt-1" aria-label="Secondary navigation">
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/browseAll">All products</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/newInStore">
                            New In Store
                            <span className="position-absolute badge text-danger fw-bold translate-middle top-25 start-75 fw-normal"><small>New</small></span>
                        </NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/kurtis">Kurti/Sets</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/dupattas">Dupattas</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/dress">Dress</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/pants">Pants/Palazzo</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/fabrics">Fabrics</NavCatLink>
                        <NavCatLink className="nav-link ps-0 pe-4" to="/category/jewellery">Jewellery</NavCatLink>
                    </nav>
                </div>
            </header>
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
