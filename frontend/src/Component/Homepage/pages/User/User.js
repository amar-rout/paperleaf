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
                <div className="my-5 text-md-center px-2 px-md-0">
                    <h2 className="" style={{ letterSpacing: "", fontFamily: "Playfair Display,serif", fontStyle: "italic", transition: "color .1s" }}>
                        My Account
                        <span className="d-md-none float-end pe-2"><i class="bi bi-chevron-down"></i></span>
                    </h2>
                </div>
                <div className="row my-2">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div class="card text-center">
                            <div class="card-header bg-body">
                                <div className="text-center my-3">
                                    <div className="mb-3 position-relative">
                                        <img className="rounded-circle border border-dark border-1 " src="/assets/images/user-thumbnail.jpg" alt="Profile" width="120" height="120" />
                                    </div>
                                    <span className="mb-1 h4">Amarendra Rout</span>
                                    <h4 className="small text-secondary fw-semibold">
                                        amarendrarout@gmail.com <i class='bx bxs-badge-check text-success' ></i>
                                    </h4>
                                    <h4 className="small text-secondary fw-semibold">
                                        +91 70430 96106 <i class='bx bxs-badge-check text-success' ></i>
                                    </h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush text-start py-1">
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userProfile">
                                        <span className="p-0 pe-2 pt-1"><i className='bx bx-user' style={{ fontSize: "20px" }}></i></span>
                                        My Profile
                                    </AccountLink>
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userAddress">
                                        <span className="p-0 pe-2 pt-1"><i class='bx bx-target-lock' style={{ fontSize: "20px" }}></i></span>
                                        My Addresses
                                    </AccountLink>
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userOrders">
                                        <span className="p-0 pe-2 pt-1"><i class='bx bx-book' style={{ fontSize: "20px" }}></i></span>
                                        My Orders
                                    </AccountLink>
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userPrivacyAndSafety">
                                        <span className="p-0 pe-2 pt-1"><i class='bx bx-shield-quarter' style={{ fontSize: "20px" }}></i></span>
                                        Privacy and Safety
                                    </AccountLink>
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userSettings">
                                        <span className="p-0 pe-2 pt-1"><i className='bx bxs-truck' style={{ fontSize: "20px" }}></i></span>
                                        Settings
                                    </AccountLink>
                                    <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center" to="/user/userOrderHelp">
                                        <span className="p-0 pe-2 pt-1 bg-dark-soft"><i className='bx bx-question-mark' style={{ fontSize: "20px" }}></i></span>
                                        Need help on recent order
                                    </AccountLink>
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