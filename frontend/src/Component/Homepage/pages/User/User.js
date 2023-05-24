import React, { useEffect } from "react";
import { Link, Outlet, useMatch, useNavigate, useParams, useResolvedPath } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import {
    logout
} from "../../../../app/userSlice";

import { getOrdersAsync } from "../../../../app/orderSlice";

import "./User.css"
import { useDispatch } from "react-redux";

const User = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        dispatch(getOrdersAsync(user.token));
    }, []);

    let { uriId } = useParams();
    const idValue = urlParams[uriId];
    // const titleValue = urlTitleParams[id];

    if (idValue !== undefined) {
        title = `User ${idValue}`;
        userLink = `/user/${uriId}`;
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
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
                <div className="my-5 text-center px-2 px-md-0">
                    <h2 className="" style={{ letterSpacing: "", fontFamily: "Playfair Display,serif", fontStyle: "italic", transition: "color .1s" }}>
                        My Account
                        {/* <span className="d-md-none float-end pe-2"><i className="bi bi-chevron-down"></i></span> */}
                    </h2>
                </div>
                <div className="row my-2">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card text-center">
                            <div className="card-header bg-body">
                                <div className="text-center my-3">
                                    <div className="mb-3 d-flex justify-content-center align-items-center">
                                        {
                                            user.image ?
                                                <img className="rounded-circle border border-dark border-1 " src={`http://localhost:5010${user.image}`} alt="Profile" width="120" height="120" />
                                                :
                                                <>
                                                    {/* <img className="rounded-circle border border-dark border-1 " src="" alt="Profile" width="120" height="120" /> */}
                                                    <div className="" style={{ width: '100px', height: '100px', paddingTop: '12px', border: '1px solid black', borderRadius: '50%' }}>
                                                        <i className="bi bi-person p-0 m-0" style={{ fontSize: "48px" }}></i>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                    <span className="mb-1 h4">{user.name}</span>
                                    <h4 className="small text-secondary fw-semibold">
                                        {user.email}
                                        {/* <i className='bx bxs-badge-check text-success' ></i> */}
                                    </h4>
                                    <h4 className="small text-secondary fw-semibold">
                                        +91 {user.phone}
                                        {/* <i className='bx bxs-badge-check text-success' ></i> */}
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush text-start py-1">
                                    <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/profile">
                                        <span className="p-0 pe-4"><i className="bi bi-person"></i></span>
                                        Profile
                                    </AccountLink>
                                    <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/address">
                                        <span className="p-0 pe-4"><i className="bi bi-geo-alt"></i></span>
                                        Address
                                    </AccountLink>
                                    <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/orders">
                                        <span className="p-0 pe-4"><i className="bi bi-journal-text"></i></span>
                                        Orders
                                    </AccountLink>
                                    {/* <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/paymentMethods">
                                        <span className="p-0 pe-4"><i className="bi bi-credit-card"></i></span>
                                        Payment Method
                                    </AccountLink> */}
                                    {/* <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/notifications">
                                        <span className="p-0 pe-4"><i className="bi bi-bell"></i></span>
                                        Notification
                                    </AccountLink> */}
                                    <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/privacyAndSafety">
                                        <span className="p-0 pe-4"><i className="bi bi-shield"></i></span>
                                        Privacy and Safety
                                    </AccountLink>
                                    <AccountLink className="list-group-item my-1 py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                        to="/user/settings">
                                        <span className="p-0 pe-4"><i className="bi bi-gear"></i></span>
                                        Account Settings
                                    </AccountLink>
                                    {/* <AccountLink className="list-group-item py-2 border-0 text-dark link-warning d-flex flex-0 justify-content-start align-items-center"
                                                 to="/user/userOrderHelp">
                                        <span className="p-0 pe-2 pt-1 bg-dark-soft"><i className='bx bx-question-mark' style={{ fontSize: "20px" }}></i></span>
                                        Need help on recent order
                                    </AccountLink> */}
                                </ul>
                            </div>

                            <div className="card-footer bg-body text-center">
                                <button onClick={handleLogout} className="btn btn-outline-dark px-4 py-2 rounded-3" type="button">
                                    <i className='bx bx-log-out-circle'></i> Logout
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