import React from 'react'
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NavbarMain = () => {
    return (
        <>
            <nav class="navbar bg-body-tertiary fixed-top shadow">
                <div class="container justify-content-between align-items-center">
                    <div>
                        <button class="btn btn-default border-1 navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            {/* <span class="navbar-toggler-icon"></span> */}
                            <i class="bi bi-list display-6"></i>
                        </button>
                        <a class="navbar-brand text-uppercase ms-2" href="/">Paperleaf</a>
                    </div>
                    {/* <div className=''>
                        <div className="dropdown">
                            <a href="/" className="link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            </a>
                            <ul className="dropdown-menu text-small shadow" style={{}}>
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><a className="dropdown-item" href="/">Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="/">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    {/* <div class="navbar-nav"> */}
                    <div class="dropdown">
                        <a href="/" className="link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end text-small shadow" style={{}}>
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="/">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    {/* </div> */}

                    {/* <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form> */}
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title text-uppercase" id="offcanvasNavbarLabel">Paperleaf</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            {/* <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/">Action</a></li>
                                        <li><a class="dropdown-item" href="/">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                            {/* <form class="d-flex mt-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <ul className="list-unstyled ps-0 mb-5">
                                <li className="mb-1">
                                    {/* <Navbarlink to="/" className="btn d-inline-flex align-items-center rounded border-0 mx-3">
                                        Dashboard
                                    </Navbarlink> */}
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                        Dashboard
                                    </button>
                                    <div className="collapse show" id="home-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Dashboard Overview
                                                </Navbarlink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#coupons-collapse" aria-expanded="true">
                                        Coupons
                                    </button>
                                    <div className="collapse show" id="coupons-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/coupons" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Coupons
                                                </Navbarlink>
                                            </li>
                                            {/* <li>
                                                <Navbarlink to="/addCoupons" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Add Coupons
                                                </Navbarlink>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#coupons-collapse" aria-expanded="true">
                                        Collections
                                    </button>
                                    <div className="collapse show" id="coupons-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/coupons" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    List Collections
                                                </Navbarlink>
                                            </li>
                                            <li>
                                                <Navbarlink to="/addCoupons" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Add Collections
                                                </Navbarlink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#category-collapse" aria-expanded="true">
                                        Category
                                    </button>
                                    <div className="collapse show" id="category-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/category" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    List Category
                                                </Navbarlink>
                                            </li>
                                            {/* <li>
                                                <Navbarlink to="/addCategory" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Add Category
                                                </Navbarlink>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#products-collapse" aria-expanded="true">
                                        Products
                                    </button>
                                    <div className="collapse show" id="products-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/products" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    List Products
                                                </Navbarlink>
                                            </li>
                                            <li>
                                                <Navbarlink to="/addProduct" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Add Product
                                                </Navbarlink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                                        Orders
                                    </button>
                                    <div className="collapse show" id="orders-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/orders" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    All Orders
                                                </Navbarlink>
                                            </li>
                                            {/* <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#users-collapse" aria-expanded="true">
                                        Users
                                    </button>
                                    <div className="collapse show" id="users-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li>
                                                <Navbarlink to="/users" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Users
                                                </Navbarlink>
                                            </li>
                                            {/* <li>
                                                <Navbarlink to="/userSettings" className="link-dark d-inline-flex text-decoration-none rounded">
                                                    Users Settings
                                                </Navbarlink>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="border-top my-3"></li> */}
                                {/* <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                                        Account
                                    </button>
                                    <div className="collapse show" id="account-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                                            <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
                                        </ul>
                                    </div>
                                </li> */}
                                <li className="border-top my-3"></li>
                            </ul>
                            <div className='text-center'>
                                <button type="button" class="btn btn-default border-1 border-danger link-danger" data-bs-dismiss="offcanvas" aria-label="Close"> Close</button>
                            </div>
                            <div class="position-absolute text-center lh-1 bottom-0">
                                <p className='lh-1'>
                                    Copyright &copy; {new Date().getFullYear()} All rights reserved
                                </p>
                                <p className='lh-1'>
                                    This site is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="http://techrestoreservice.com" target="_blank">TechRestore Services</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

function Navbarlink({ to, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <span className={isActive ? "active" : ""}>
            <Link to={to} {...props}></Link>
        </span>
    )
}

export default NavbarMain;