import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Wishlist = () => {
    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Wishlist', link: '/wishlists', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Wishlists</h4>
            </div>
        </>
    )
}

export default Wishlist;