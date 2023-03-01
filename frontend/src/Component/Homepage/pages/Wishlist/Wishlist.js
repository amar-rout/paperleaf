import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import {
    removeWishlistItem,
    getWishlistCount,
    getWishlistItems,
} from "../../../../app/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {

    const [count, setCount] = useState(0);

    const wishlistItems = useSelector(getWishlistItems);
    const wishlistCount = useSelector(getWishlistCount);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveWishlist = (id) => {
        dispatch(removeWishlistItem(id));
        setCount(wishlistCount);
    }
    return (
        <HelmetProvider>
            <Meta title="Wishlist" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Wishlist', link: '/wishlists', active: true },
                ]}
            />
            <section className="marketing py-5 bg-body">
                {/* <div className="container m-0 m-sm-default p-1 p-sm-default"> */}
                <div className="container">
                    <h4 className="text-center">
                        <span className="border-bottom border-2">Wishlist</span>
                    </h4>
                    {count === 0 ?
                        <div className="my-3">
                            <div className="text-center">
                                <img src="/assets/images/empty-wishlist.png" alt="Empty Cart" style={{ width: '300px' }} />
                            </div>
                            <div className="text-center fs-5 mt-3 fw-normal">
                                <p>Your wishlist is empty!</p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-dark mt-2 px-3" onClick={() => navigate('/')}>
                                    <i className="bi bi-arrow-left me-2" />
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                        :
                        <>
                            <h5 className="pb-2 pt-md-2 my-4 mt-lg-5 fs-6">My Wishlist<span className="fs-base fw-normal text-muted"> ({count} items)</span></h5>
                            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 g-sm-2 g-md-3 g-lg-4">
                                {wishlistItems.map((product) => (
                                    <div key={product.pId} className="col">
                                        <div className="card product_card p-0 p-md-0 m-0 shadow-sm rounded-0">
                                            <img src={product.image} className="card-img-top rounded-0" alt="card 1" />
                                            <div className="card-body p-2">
                                                <p className="lh-md-1 my-0 text-muted small">{product.category}</p>
                                                <p className="card-title lh-md-1 my-0 my-md-1"><b>{product.name}</b></p>
                                                <p className="fw-bold lh-1 my-2">₹{product.price}</p>
                                                <button type="button" className="btn bg-warning w-100"
                                                    onClick={() => navigate(`/products/${product._id}`)}>
                                                    View details
                                                </button>
                                                <button type="button" className="btn btn-outline-danger w-100 mt-2"
                                                    onClick={() => handleRemoveWishlist(product.wId)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </section>
        </HelmetProvider>
    )
}

export default Wishlist;