import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import {
    removeWishlistItem,
    getWishlistCount,
    getWishlistItems,
} from "../../../../app/wishlistSlice";

import {
    addCartAsync,
} from "../../../../app/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {

    const [count, setCount] = useState(0);

    const wishlistItems = useSelector(getWishlistItems);
    const wishlistCount = useSelector(getWishlistCount);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    useEffect(() => {
        setCount(wishlistCount);
    }, [wishlistCount, setCount]);

    const handleRemoveWishlist = (id) => {
        dispatch(removeWishlistItem(id));
        setCount(wishlistCount);
    }

    const handleAddCart = (id, name) => {
        // if (user && user.token) {
            // dispatch(userVerifyAsync());
            handleRemoveWishlist(id);
            dispatch(addCartAsync({ pId: id, qty: 1 }));
        // } else {
            // navigate('/login');
        // }
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
                                    <div key={product.wId} className="col">
                                        {/* <div className="card product_card p-0 p-md-0 m-0 shadow-sm rounded-0" onClick={() => navigate(`/products/${product.wId}`)}> */}
                                        <div className="card product-item bg-light p-0 p-md-0 m-0 rounded-0 border border-0" style={{ boxShadow: 'none' }}>
                                            <div className="product-item">
                                                <div className="product">
                                                    <img src={`/assets${product.image}`}
                                                        srcset={`/assets${product.image} 480w, /assets${product.image} 800w`}
                                                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 800px" alt={`/assets${product.image}`} />
                                                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                                        <li class="icon" onClick={() => navigate(`/products/${product.wId}`)}>
                                                            <i class="bi bi-eye"></i>
                                                        </li>
                                                        <li class="icon mx-3" onClick={() => handleAddCart(product.wId, product.name)}>
                                                            <i class="bi bi-cart"></i>
                                                        </li>
                                                        <li class="icon" onClick={()=> handleRemoveWishlist(product.wId)}>
                                                            <i class="bi bi-trash"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-body bg-light px-1 py-1" style={{ boxShadow: 'none' }}>
                                            <p className="fw-normal text-uppercase p-0 m-0 mb-1" style={{ fontSize: "13px" }}>
                                                    <small>{product.name}</small>
                                                </p>
                                                <p className="text-dark fw-semibold p-0 m-0 mb-1" style={{ fontSize: "13px" }}>
                                                    <span>{formatter.format(product.price)}</span>
                                                </p>
                                            </div>

                                            {/* <img src={product.image} className="card-img-top rounded-0" alt="card 1" /> */}
                                            {/* <div className="card-body p-2">
                                                <p className="lh-md-1 my-0 text-muted small">{product.category}</p>
                                                <p className="card-title lh-md-1 my-0 my-md-1"><b>{product.name}</b></p>
                                                <p className="fw-bold lh-1 my-2">₹{product.price}</p> */}
                                                {/* <div className="d-flex flex-row justify-content-between align-items-center gap-2 gap-md-4">
                                                    <button type="button" className="btn bg-warning w-100"
                                                        onClick={() => navigate(`/products/${product.wId}`)}>
                                                        View details
                                                    </button>
                                                    <button type="button" className="btn btn-outline-danger w-100 mt-2 small"
                                                        onClick={() => handleRemoveWishlist(product.wId)}>
                                                        <i className="bi bi-trash me-2"></i>
                                                        <span>Delete</span>
                                                    </button>
                                                </div> */}
                                                {/* <div className="d-flex flex-0 justify-content-between align-items-center gap-2">
                                                    <button type="button" className="btn btn-outline-danger w-50 mt-2 small"
                                                        onClick={() => handleRemoveWishlist(product.wId)}>
                                                        <i className="bi bi-trash"></i>
                                                        <span className="d-none d-md-inline"><small>REMOVE</small></span>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-dark w-50 mt-2 fs-6 fw-semibold small"
                                                        onClick={() => handleRemoveWishlist(product.wId)}>
                                                        <i className="bi bi-cart"></i>
                                                        <span className="d-none d-md-inline"><small>ADD TO CART</small></span>
                                                    </button>
                                                </div> */}
                                            {/* </div> */}
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