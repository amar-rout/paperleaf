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
            {/* <section className="album py-3">
                <div className="container">
                    <h4 className="pb-5 text-center">
                        <span className="border-bottom border-2">Wishlists</span>
                    </h4>
                </div>
            </section> */}
            <div className="container my-5 text-center">
                <h4>Wishlists</h4>
            </div>
        </>
    )
}

export default Wishlist;