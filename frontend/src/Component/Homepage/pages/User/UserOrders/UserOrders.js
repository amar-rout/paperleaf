import React from 'react';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserOrders = () => {
    return (
        <>
            <Meta title="User Orders" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Orders', link: '/user/orders', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>UserOrders</h4>
            </div>
        </>

    )
}

export default UserOrders;