import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
import './Navbar.css';
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaBars, FaUser } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { logout } from "../../App/features/adminAuthSlice";

const Navbar = () => {
  return (
    // <main className="d-flex flex-nowrap">
    //   {/* <Sidebar /> */}
    // </main>
    <>
      <header class="navbar navbar-light sticky-top bg-light flex-md-nowrap px-2 py-3 shadow">
        <button class="navbar-toggler position-absolute btn btn-default d-md-none collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list display-6"></i>
        </button>
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-5 text-uppercase mx-5 mx-md-0" href="/">Paperleaf</a>
        {/* <input class="form-control form-control-dark rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav p-0 m-0">
          <div class="nav-item text-nowrap">
            <a class="nav-link link-dark px-3" href="/">Sign out</a>
          </div>
        </div> */}
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse" style={{}}>
            <div class="position-sticky pt-3 sidebar-sticky">
              {/* <ul class="nav flex-column gap-2">
                <li className="mb-1">
                  <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Dashboard
                  </button>
                  <div className="collapse show" id="home-collapse" style={{}}>
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">
                          Dashboard Overview
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="mb-1">
                  <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home align-text-bottom" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span className="ms-2">Dashboard</span>
                  </button>
                  <div class="collapse show" id="home-collapse" style={{}}>
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a href="/" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                      <li><a href="/" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                      <li><a href="/" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file align-text-bottom" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    <span className="ms-2">Orders</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-text-bottom" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span className="ms-2">Products</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-text-bottom" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span className="ms-2">Users</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 align-text-bottom" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    <span className="ms-2">Reports</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers align-text-bottom" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    <span className="ms-2">Integrations</span>
                  </a>
                </li>
              </ul> */}
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
                  <button className="btn d-inline-flex align-items-center rounded border-0">
                    <i class="bi bi-box-arrow-left fs-6"></i>
                    <span className="ms-2">Logout</span>
                  </button>
                  {/* <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#users-collapse" aria-expanded="true">
                    Logout
                  </button> */}
                  {/* <div className="collapse show" id="users-collapse" style={{}}>
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Navbarlink to="/users" className="link-dark d-inline-flex text-decoration-none rounded">
                          Users
                        </Navbarlink>
                      </li>
                      <li>
                        <Navbarlink to="/userSettings" className="link-dark d-inline-flex text-decoration-none rounded">
                          Users Settings
                        </Navbarlink>
                      </li>
                    </ul>
                  </div> */}
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

              {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Saved reports</span>
                <a class="link-secondary" href="/" aria-label="Add a new report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </a>
              </h6> */}
              {/* <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Current month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Last quarter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Social engagement
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Year-end sale
                  </a>
                </li>
              </ul> */}
            </div>
          </nav>
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> */}
            <Outlet />
            <Footer />
            {/* </div> */}
          </main>
          <div className="bg-white px-0 pt-2" style={{ minHeight: '6vh' }}>
            
          </div>
        </div>
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

export default Navbar;
// export default memo(Navbar);