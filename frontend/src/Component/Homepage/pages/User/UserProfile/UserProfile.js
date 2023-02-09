import React from 'react';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserProfile = () => {
    return (
        <>
            <Meta title="User Profile" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Profile', link: '/user/profile', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Profile</h4>
            </div>
        </>

    )
}

export default UserProfile;