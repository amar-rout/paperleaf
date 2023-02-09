import React from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserNotification = () => {
    return (
        <>
            <Meta title="User Notification" />
            {/* <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Notification', link: '/user/notification', active: true }
                ]}
            /> */}
            <div className="container">
                <div className="py-2 p-md-2 p-lg-3">
                    <div className="mb-5">
                        <span className="mb-0 h4">Notification settings</span>
                    </div>
                    <div className="mb-5">
                        <div className="border-bottom pb-3 mb-3">
                            <h5 className="mb-0">Email Notifications</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h6 className="mb-1">Weekly Notification</h6>
                                <p className="mb-0 ">
                                    We will send email notification for weekly top rated and newly added products.
                                </p>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-1">Account Summary</h6>
                                <p className="mb-0 pe-12 ">
                                    We will send email notification for changing of profile details.
                                </p>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" for="flexSwitchCheckChecked"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="border-bottom pb-3 mb-3">
                            <h5 className="mb-0">Order updates</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h6 className="mb-1">Text messages</h6>
                                <p className="mb-0 pe-12 ">
                                    We will send text messages for user verification, order confirmation and order cancellation.
                                </p>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" checked />
                                <label className="form-check-label" for="flexSwitchCheckDefault2"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-1">Call before checkout</h6>
                                <p className="mb-0 ">We'll only call if there are pending changes
                                </p>
                            </div>

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" checked />
                                <label className="form-check-label" for="flexSwitchCheckChecked2"></label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="border-bottom pb-3 mb-3">
                            <h5 className="mb-0">Website Notification</h5>
                        </div>
                        <div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckFollower" checked />
                                <label className="form-check-label" for="flexCheckFollower">
                                    New Follower
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckPost" />
                                <label className="form-check-label" for="flexCheckPost">
                                    Post Like
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckPosted" />
                                <label className="form-check-label" for="flexCheckPosted">
                                    Someone you followed posted
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckCollection" />
                                <label className="form-check-label" for="flexCheckCollection">
                                    Post added to collection
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckOrder" checked />
                                <label className="form-check-label" for="flexCheckOrder">
                                    Order Delivery
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserNotification;