import React from "react";
import './Sidebar.css';
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Sidebar = () => {
    return (
        <>
            <div className="flex-shrink-0 p-3 bg-light" style={{ width: '280px', "overflowY": 'auto' }}>
                <a href="/" className="d-flex align-items-center pb-3 link-dark text-decoration-none border-bottom bg-light">
                    {/* <svg className="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                    <span className="fs-5 fw-semibold">Paperleaf</span>
                </a>
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
                    <li className="border-top my-3"></li>
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
                </ul>
            </div>
            {/* <div className="position-absolute fixed-bottom px-4 py-3 bg-white" style={{ width: "280px" }}>
                <div className="dropdown">
                    <a href="/" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Amarendra Rout</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" style={{}}>
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div>
            </div> */}
            <div className="b-example-divider b-example-vr"></div>
            <div className="bg-light w-100" style={{overflowY: 'scroll'}}>
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

function Navbarlink({ to, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <span className={isActive ? "active" : ""}>
            <Link to={to} {...props}></Link>
        </span>
    )
}

export default Sidebar;