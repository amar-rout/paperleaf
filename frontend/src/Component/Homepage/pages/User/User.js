import React from "react";
import { Link, Outlet, useMatch, useParams, useResolvedPath } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import "./User.css"

const User = () => {

    const urlParams = {
        profile: "Profile",
        orders: "UserOrders",
        trackOrder: "trackOrder",
        settings: "Settings",
        help: "Help",
    };

    // const urlTitleParams = {
    //     profile: "My Profile",
    //     orders: "My Orders",
    //     trackOrder: "Track Order",
    //     settings: "Settings",
    //     help: "Help",
    // };

    let title = 'User';
    let userLink = '/user';

    let { id } = useParams();
    const idValue = urlParams[id];
    // const titleValue = urlTitleParams[id];

    if (idValue !== undefined) {
        title = `User ${idValue}`;
        userLink = `/user/${id}`;
    }

    return (
        <>
            {
                idValue === undefined || idValue === null ?
                    <>
                        <Meta title={title} />
                        <Breadcrumb
                            links={[
                                { name: 'Home', link: '/', active: false },
                                { name: 'User', link: userLink, active: true }
                            ]}
                        />
                    </>
                    :
                    <>
                        <Meta title={title} />
                        <Breadcrumb
                            links={[
                                { name: 'Home', link: '/', active: false },
                                { name: 'User', link: '/user', active: false },
                                { name: idValue, link: userLink, active: true }
                            ]}
                        />
                    </>
            }
            <div className="container bg-body my-5">
                <div className="text-center my-5">
                    <h2 className="mt-5" style={{ fontFamily: "Playfair Display,serif", fontStyle: "italic", transition: "color .1s" }}>
                        My Account
                    </h2>
                </div>
                {/* <div className="row my-4 d-flex flex-0 justify-content-start align-items-center">
                    <div className="col-1">
                        <div className="position-relative">
                            <img src="http://localhost:3000/assets/images/user-thumbnail.jpg" alt="mdo" width="100" height="100" className="rounded-circle border border-1 border-secondary" />
                            <span class="position-absolute bottom-0 end-0 px-1 bg-success border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                                <i className='bx bx-check text-white p-0' ></i>
                            </span>
                        </div>
                    </div>
                    <div className="col-10 ms-4">
                        <h4>Amarendra Rout</h4>
                        <h6 className="fw-bold p-0 m-0 lh-sm"><small><span className="fw-bold me-2 text-muted">Email:</span>amarendra.in.rout@gmail.com</small></h6>
                        <h6 className="fw-normal p-0 m-0 lh-sm"><small><span className="fw-bold me-2 text-muted">Phone:</span>+91 7043096106</small></h6>
                    </div>

                </div> */}
                    {/* <hr /> */}
                    <div className="row mx-1 my-4">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div class="card text-center">
                                <div class="card-header bg-body">
                                    <div className="text-center my-3">
                                        <div className="mb-3 position-relative">
                                            <img className="rounded-circle border border-dark border-1 " src="http://192.168.29.178:3000/assets/images/user-thumbnail.jpg" alt="Profile" width="120" height="120" />
                                        </div>
                                        <h2 className="mb-1">Amarendra Rout</h2>
                                        <h4 className="small text-secondary fw-semibold">
                                            amarendrarout@gmail.com <i class='bx bxs-badge-check text-success' ></i>
                                        </h4>
                                        <h4 className="small text-secondary fw-semibold">
                                            +91 70430 96106 <i class='bx bxs-badge-check text-success' ></i>
                                        </h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    {/* <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a> */}
                                    <ul class="list-group list-group-flush text-start py-2">
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userProfile">
                                            <span className="p-0 pe-2 pt-1"><i className='bx bx-user' style={{ fontSize: "20px" }}></i></span>
                                            My Profile
                                        </AccountLink>
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userAddress">
                                            <span className="p-0 pe-2 pt-1"><i class='bx bx-target-lock' style={{ fontSize: "20px" }}></i></span>
                                            My Addresses
                                        </AccountLink>
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userOrders">
                                            <span className="p-0 pe-2 pt-1"><i class='bx bx-book' style={{ fontSize: "20px" }}></i></span>
                                            My Orders
                                        </AccountLink>
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userPrivacyAndSafety">
                                            <span className="p-0 pe-2 pt-1"><i class='bx bx-shield-quarter' style={{ fontSize: "20px" }}></i></span>
                                            Privacy and Safety
                                        </AccountLink>
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userSettings">
                                            <span className="p-0 pe-2 pt-1"><i className='bx bxs-truck' style={{ fontSize: "20px" }}></i></span>
                                            Settings
                                        </AccountLink>
                                        <AccountLink className="list-group-item py-3 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userOrderHelp">
                                            <span className="p-0 pe-2 pt-1 bg-dark-soft"><i className='bx bx-question-mark' style={{ fontSize: "20px" }}></i></span>
                                            Need help on recent order
                                        </AccountLink>
                                        {/* <li class="px-0 list-group-item border-0">
                                        <AccountLink className="text-dark link-warning" to="/user/userProfile">My Profile</AccountLink>
                                    </li>
                                    <li class="px-0 list-group-item border-0">

                                    </li>
                                    <li class="px-0 list-group-item border-0">

                                    </li>
                                    <li class="px-0 list-group-item border-0">

                                    </li>
                                    <li class="px-0 list-group-item border-0">

                                    </li>
                                    <li class="px-0 list-group-item border-0">

                                    </li> */}
                                    </ul>
                                </div>

                                <div class="card-footer bg-body text-center">
                                    <button className="btn btn-default text-dark bg-light px-4 rounded rounded-3 link-warning" to="/logout">
                                        <span className="p-0 pe-2 pt-2">
                                            <i className='bx bx-log-out-circle' style={{ fontSize: "16px" }}></i>
                                        </span>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 my-4 my-md-0">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function AccountLink({ to, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <span className={isActive ? "active text-muted fw-semibold border-start border-2 border-warning" : ""}>
            <Link to={to} {...props} />
        </span>
    )
}
export default User;