import React, { useEffect, useState } from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import axios from 'axios';
import Meta from '../../Meta';

import {
    selectStatus,
    selectErrorMessage,
    selectUser,
    clearState,
    updateProfileAsync,
    // updatePasswordChangeAsync,
} from '../../../../../app/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    // const loginUser = JSON.parse(localStorage.getItem("user"));

    const [editProfile, setEditProfile] = useState(false);
    const [loadProfile, setLoadProfile] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [loadEmail, setLoadEmail] = useState(false);
    const [editPhone, setEditPhone] = useState(false);
    const [loadPhone, setLoadPhone] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [loadPassword, setLoadPassword] = useState(false);

    const [profileInputErrorMessage, setProfileInputErrorMessage] = useState("");
    const [emailInputErrorMessage, setEmailInputErrorMessage] = useState("");
    const [phoneInputErrorMessage, setPhoneInputErrorMessage] = useState("");
    const [passwordInputErrorMessage, setPasswordInputErrorMessage] = useState("");


    const loginUser = useSelector(selectUser);
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [userProfile, setUserProfile] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: ""
    });

    const [userEmail, setUserEmail] = useState({
        email: ""
    });

    const [userPhone, setUserPhone] = useState({
        phone: ""
    });

    const [userPassword, setUserPassword] = useState({
        currPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleUserProfileChange = (e) => {
        const { name, value } = e.target;
        setUserProfile({
            ...userProfile,
            [name]: value
        });
    }

    const handleUserEmailChange = (e) => {
        const { name, value } = e.target;
        setUserEmail({
            ...userEmail,
            [name]: value
        });
    }

    const handleUserPhoneChange = (e) => {
        const { name, value } = e.target;
        setUserPhone({
            ...userPhone,
            [name]: value
        });
    }

    const handleUserPasswordChange = (e) => {
        const { name, value } = e.target;
        setUserPassword({
            ...userPassword,
            [name]: value
        });
    }

    useEffect(() => {
        if (loginUser) {
            setUserProfile({
                firstName: loginUser.fname,
                middleName: loginUser.mname,
                lastName: loginUser.lname,
                gender: loginUser.gender,
                dob: loginUser.dob
            });
            setUserEmail({
                email: loginUser.email
            });
            setUserPhone({
                phone: loginUser.phone
            });
        }
    }, [loginUser]);

    useEffect(() => {
        dispatch(clearState());
    });

    useEffect(() => {
        if (status === "LOADING") {
            dispatch(clearState());
        }
        if (status === "LOADED") {
            dispatch(clearState());
            setEditPassword(false);
            setUserPassword({
                currPassword: "",
                newPassword: "",
                confirmPassword: ""
            });
            toast.success(errorMessage);
        }
        if (status === "ERROR") {
            dispatch(clearState());
            setPasswordInputErrorMessage(errorMessage);
        }
    }, [status, dispatch, errorMessage])

    const handleEditProfile = () => {
        setEditProfile(true);
    }
    const handleCancelProfile = () => {
        setEditProfile(false);
        // dispatch(updateProfileAsync(userProfile));
    }
    const handleSaveProfile = () => {
        dispatch(updateProfileAsync(userProfile));
        dispatch(clearState());
        setEditProfile(false);
    }
    const handleCancelEmail = () => {
        setEditEmail(false);
    }
    const handleUpdateEmail = () => {
        dispatch(updateProfileAsync(userEmail));
        dispatch(clearState());
        setEditEmail(false);
    }
    const handleCancelPhone = () => {
        setEditPhone(false);
    }
    const handleUpdatePhone = () => {
        setLoadPhone(true);
        if (userPhone.phone !== '' && userPhone.phone.length === 10) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${loginUser.token}`,
                },
            };
            axios.patch('/api/users/profile/', userPhone, config)
                .then(response => {
                    toast.success("Phone number changed successfully.");
                    console.log(response.data);
                    setLoadPhone(false);
                    setUserPhone({
                        phone: response.data.phone
                    });
                    setEditPhone(false);
                }).catch(error => {
                    setLoadPhone(false);
                    if (error.response) {
                        toast.dismiss();
                        toast.error(error.response.data.message);
                    } else if (error.request) {
                        toast.dismiss();
                        toast.error(error.request);
                    } else {
                        toast.dismiss();
                        toast.error(error.message);
                    }
                })
        } else {
            setPhoneInputErrorMessage("Please provide valid mobile number");
        }
    }
    const handleCancelPassword = () => {
        setUserPassword({
            currPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
        setEditPassword(false);
    }
    const handleUpdatePassword = () => {
        setLoadPassword(true);
        const { currPassword, newPassword, confirmPassword } = userPassword;
        if (currPassword !== "" && newPassword !== "" && confirmPassword !== "") {
            if (newPassword === confirmPassword) {
                // dispatch(updatePasswordChangeAsync(userPassword));
                // const logUser = JSON.parse(localStorage.getItem('user'));
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${loginUser.token}`,
                    },
                };
                axios.put('/api/users/profile/passwordChange', userPassword, config)
                    .then(response => {
                        toast.success("Password changed successfully.");
                        setLoadPassword(false);
                        setUserPassword({
                            currPassword: "",
                            newPassword: "",
                            confirmPassword: ""
                        });
                        setEditPassword(false);
                    }).catch(error => {
                        setLoadPassword(false);
                        if (error.response) {
                            toast.dismiss();
                            toast.error(error.response.data.message);
                        } else if (error.request) {
                            toast.dismiss();
                            toast.error(error.request);
                        } else {
                            toast.dismiss();
                            toast.error(error.message);
                        }
                    })
            } else {
                setPasswordInputErrorMessage('New Password and Confirm Password should be match.');
            }
        } else {
            setPasswordInputErrorMessage('One or More input missing.');
        }
    }
    return (
        <>
            <Meta title="User Profile" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">My Profile</h4>
                </div>
                <div className="row border border-1 rounded-4">
                    <div className="mt-3 mb-2">
                        <span className="mb-0 h5">Basic Information</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">First name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editProfile} onChange={handleUserProfileChange} value={userProfile.firstName} type="text" id="firstName" name="firstName" placeholder="First name" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Middle name</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editProfile} onChange={handleUserProfileChange} value={userProfile.middleName} id="middleName" name="middleName" type="text" placeholder="Middle name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editProfile} onChange={handleUserProfileChange} value={userProfile.lastName} id="lastName" name="lastName" type="text" placeholder="Last name" required />
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div> */}
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Date of birth</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editProfile} onChange={handleUserProfileChange} value={userProfile.dob} name="dob" id="dob" type="date" placeholder="Date of birth" required />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div>
                                <div className="btn-group" role="group" aria-label="Select gender">
                                    <input type="radio" className="btn-check form-control" name="gender" id="male" autoComplete="off" value="Male" checked={userProfile.gender === "Male"} onChange={handleUserProfileChange} disabled={!editProfile} />
                                    <label className="btn btn-outline-dark px-4 py-3 me-2 rounded-pill" htmlFor="male">
                                        <i className="bi bi-gender-male fs-6 me-3"></i>Male
                                    </label>
                                    <input type="radio" className="btn-check form-control" name="gender" id="female" autoComplete="off" value="Female" checked={userProfile.gender === "Female"} onChange={handleUserProfileChange} disabled={!editProfile} />
                                    <label className="btn btn-outline-dark px-4 py-3 ms-2 rounded-pill" htmlFor="female">
                                        <i className="bi bi-gender-female fs-6 me-3"></i>Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="d-flex justify-content-start align-items-center gap-3 mb-3 mt-3 mt-md-0">
                            {
                                editProfile ?
                                    <>
                                        <button className="btn btn-danger px-4 px-md-5 py-3" type="submit" onClick={handleCancelProfile}>
                                            Cancel
                                        </button>
                                        <button className="btn btn-success px-4 px-md-5 py-3" type="submit" onClick={handleSaveProfile}>
                                            Save Changes
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button className="btn btn-dark px-4 px-md-5 py-3" type="submit" onClick={handleEditProfile}>
                                            Edit Profile
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="row mt-3 border border-1 rounded-4">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                            <span className="mb-0 h5">Update profile photo</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountAvatar">
                                Upload your profile photo *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountAvatar" type="file" placeholder="Select your avatar" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-auto text-center">
                        <img src="/assets/images/user-thumbnail.jpg" alt="mdo" width="140" height="140" className="rounded-circle" />
                    </div>
                    <div className="">
                        <button className="btn px-3 mb-3 px-md-5 py-3 bg-danger text-white me-2" type="submit">
                            Remove
                        </button>
                        <button className="btn ms-2 px-3 mb-3 px-md-5 py-3 bg-success text-white" type="submit">
                            Upload Profile Photo
                        </button>
                    </div>
                </div>
                <div className="row mt-3 border border-1 rounded-4">
                    <div className="mt-3 mb-3">
                        <span className="mb-0 h5">Update Email ID and Phone</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <div className="form-group">
                                <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required
                                    onChange={handleUserEmailChange} disabled={!editEmail} name="email" value={userEmail.email} autoComplete='off' />
                            </div>
                        </div>
                        <div className="">
                            {
                                !editEmail ?
                                    <button className="btn btn-dark me-2 px-3 mb-3 px-md-5 py-3" type="submit" onClick={() => setEditEmail(true)}>
                                        Edit Email
                                    </button>
                                    :
                                    <>
                                        <button className="btn btn-danger me-2 px-3 mb-3 px-md-5 py-3" type="submit" onClick={handleCancelEmail}>
                                            Canel
                                        </button>
                                        <button className="btn btn-success me-2 px-3 mb-3 px-md-5 py-3 bg-success text-white" type="submit" onClick={handleUpdateEmail}>
                                            Update Email
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6"></div> */}
                    <div className='col-12 col-md-6'>
                        <label className="form-label">Phone *</label>
                        <div className="input-group input-group-merge border border-0">
                            <button type="button" disabled className="btn border-1 border-secondary border-end-0 fs-6 py-3 px-3 rounded-0 rounded-start-3 mb-3 text-decoration-none shadow-none fw-normal">IN (+91)</button>
                            <input className="form-control form-control-lg py-3 px-4 fs-6 border-1 border-secondary rounded-end-3 mb-3 text-decoration-none shadow-none"
                                name="phone" type="tel" pattern="[0-9]{10}" minLength="10" maxLength="10" required
                                onChange={handleUserPhoneChange} disabled={!editPhone} value={userPhone.phone} placeholder="Enter your phone" autoComplete="off" />
                        </div>
                        {
                            phoneInputErrorMessage &&
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>{phoneInputErrorMessage}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
                        <div className="">
                            {
                                !editPhone ?
                                    <button className="btn btn-dark me-2 px-3 mb-3 px-md-5 py-3" type="submit" onClick={() => setEditPhone(true)}>
                                        Edit Phone
                                    </button>
                                    :
                                    <>
                                        {
                                            !loadPhone ?
                                                <>
                                                    <button className="btn btn-danger me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPhone} type="submit" onClick={handleCancelPhone}>
                                                        Canel
                                                    </button>
                                                    <button className="btn btn-success me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPhone} type="submit" onClick={handleUpdatePhone}>
                                                        Update Phone
                                                    </button>
                                                </>
                                                :
                                                <>
                                                    <button className="btn btn-danger me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPhone} type="submit" onClick={handleCancelPhone}>
                                                        Canel
                                                    </button>
                                                    <button className="btn btn-success me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPhone} type="submit" onClick={handleUpdatePhone}>
                                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        Update Phone
                                                    </button>
                                                </>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="row border border-1 rounded-4 mt-3">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <h5 className="mb-0">Update Password</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" autoComplete='off'
                                disabled={!editPassword} onChange={handleUserPasswordChange} name="currPassword" value={userPassword.currPassword} id="accountPassword" type="password" placeholder="Current Password" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editPassword} onChange={handleUserPasswordChange} name="newPassword" value={userPassword.newPassword} id="AccountNewPassword" type="password" placeholder="New Password" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountConfirmPassword">
                                Confirm Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                disabled={!editPassword} onChange={handleUserPasswordChange} name="confirmPassword" value={userPassword.confirmPassword} id="AccountConfirmPassword" type="password" placeholder="Confirm Password" required />
                        </div>
                    </div>
                    <div className='col-12 mb-3'>
                        {
                            passwordInputErrorMessage &&
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>{passwordInputErrorMessage}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        {
                            !editPassword ?
                                <button className="btn btn-dark me-2 px-3 mb-3 px-md-5 py-3" type="submit" onClick={() => setEditPassword(true)}>
                                    Edit password
                                </button>
                                :
                                <>
                                    {
                                        !loadPassword ?
                                            <>
                                                <button className="btn btn-danger me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPassword} type="submit" onClick={handleCancelPassword}>
                                                    Canel
                                                </button>
                                                <button className="btn px-5 py-3 mb-3 bg-success text-white" disabled={loadPassword} type="submit" onClick={handleUpdatePassword}>
                                                    Update Password
                                                </button>
                                            </>
                                            :
                                            <>
                                                <button className="btn btn-danger me-2 px-3 mb-3 px-md-5 py-3" disabled={loadPassword} type="submit" onClick={handleCancelPassword}>
                                                    Canel
                                                </button>
                                                <button className="btn px-5 py-3 mb-3 bg-success text-white" disabled={loadPassword} type="submit" onClick={handleUpdatePassword}>
                                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Update Password
                                                </button>
                                            </>
                                    }

                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;