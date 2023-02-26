import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

import "./HomeTopRatedProducts.css";

const HomeTopRatedProducts = ({ title, topProducts }) => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(topProducts);
    }, [topProducts]);

    return (

        <section className="marketing py-5 bg-light">
            {/* <div className="container m-0 m-sm-default p-1 p-sm-default"> */}
            <div className="container">
                <h4 className="pb-5 text-center">
                    <span className="border-bottom border-2">{title}</span>
                </h4>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 g-sm-2 g-md-3 g-lg-4">
                    {products.map((product) => (
                        <div key={product._id} className="col">
                            <div className="card product_card p-1 p-md-3 m-0 shadow-sm rounded-4">
                                <div className="position-relative">
                                    <button type="button" className="btn btn-sm btn-default bg-light wishlist_button position-absolute top-0 end-0 p-1 mt-1 me-1 shadow opacity-75 rounded-circle">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.4965 16.8028L16.7408 10.4994C18.4252 8.78856 18.4199 6.02549 16.7239 4.31249C15.0611 2.63292 12.3961 2.5895 10.6978 4.19086C10.6612 4.22539 10.6251 4.26068 10.5894 4.29673L9.99299 4.90026L9.38843 4.28963C9.35529 4.25616 9.32175 4.22333 9.28783 4.19116C7.58595 2.57726 4.91654 2.60193 3.26122 4.2739C1.5729 5.9792 1.58114 8.75004 3.27679 10.4627L9.55368 16.8028C9.81404 17.0657 10.2362 17.0657 10.4965 16.8028ZM11.3 5.00029C12.5964 3.69135 14.7025 3.69204 16.0133 5.01604C17.3253 6.34123 17.3272 8.47734 16.0292 9.79681L16.0282 9.79783L10.0252 15.8577L3.98743 9.75919C2.67408 8.43263 2.67286 6.28953 3.97185 4.97746C5.26525 3.67106 7.36984 3.67208 8.6778 4.99319L9.63801 5.96306C9.8338 6.16082 10.1534 6.16067 10.349 5.96272L11.3 5.00029Z" fill="#212121" />
                                        </svg>
                                    </button>
                                </div>
                                {/* <img src='/assets/images/productImages/product1.jpg' className="card-img-top bg-info-subtle rounded-4" alt="card 1" /> */}
                                {/* <img src={product.image} className="card-img-top rounded-4" alt="card 1" /> */}
                                {/* <img src='/assets/images/productImages/product1.jpg' className="card-img-top rounded-4" alt="card 1" /> */}
                                <img src={product.image} className="card-img-top rounded-4" alt="card 1" />
                                <div className="card-body p-2">
                                    <p className="card-title lh-md-1 my-0 my-md-1"><b>{product.name}</b></p>
                                    <p className="d-none d-sm lh-md-1 my-0 text-muted">{product.category}</p>
                                    <span className="lh-sm my-0 d-flex justify-content-start align-items-center">
                                        <ReactStars {...{
                                            size: 16,
                                            count: 5,
                                            color: "#feeecc",
                                            activeColor: "#fdad01",
                                            value: product.rating,
                                            a11y: true,
                                            edit: false,
                                            isHalf: true
                                        }}
                                        />
                                        <span className="ps-1 text-muted" style={{ fontSize: "14px" }}><span className="fw-600">{product.rating}</span> ({product.numReviews})</span>
                                    </span>
                                    <p className="fw-bold lh-1 my-2">₹{product.price}</p>
                                    <button type="button" className="btn bg-warning w-100 d-flex justify-content-center align-items-center"
                                        onClick={() => navigate(`/products/${product._id}`)}>
                                        <svg className="d-none d-sm" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.35352 12.5C9.28608 12.2616 9.25 12.01 9.25 11.75C9.25 11.49 9.28608 11.2384 9.35352 11H2.35445C2.28594 11.2911 2.25 11.5472 2.25 11.75C2.25 11.9528 2.28594 12.2089 2.35445 12.5H9.35352ZM11.9994 18.5H6.67846C8.06161 19.3895 9.81651 19.9999 11.9994 20H12.0012C15.642 20 18.0923 18.3023 19.6129 16.4437C20.3682 15.5206 20.8961 14.5571 21.2368 13.7369C21.5667 12.9427 21.7512 12.2094 21.7512 11.75C21.7512 11.2906 21.5667 10.5573 21.2368 9.76308C20.8961 8.94291 20.3682 7.97945 19.6129 7.05632C18.0923 5.19775 15.642 3.5 12.0012 3.5H12C9.81711 3.50011 8.06161 4.11054 6.67846 5H11.9994H12.0012C15.1104 5 17.1602 6.42725 18.452 8.00618C19.103 8.8018 19.5594 9.63522 19.8516 10.3385C20.1545 11.0677 20.2512 11.5844 20.2512 11.75C20.2512 11.9156 20.1545 12.4323 19.8516 13.1615C19.5594 13.8648 19.103 14.6982 18.452 15.4938C17.1602 17.0727 15.1104 18.5 12.0012 18.5H11.9994ZM5.38454 6C5.0159 6.33844 4.68446 6.69433 4.38828 7.05632C4.26791 7.20344 4.15332 7.35158 4.04434 7.5H11.9994V6H5.38454ZM11.9994 8.5H3.39075C3.13564 8.94057 2.92835 9.36841 2.76441 9.76308C2.73132 9.84274 2.69969 9.92178 2.66957 10H9.87858C10.383 9.38925 11.146 9 12 9C13.5188 9 14.75 10.2312 14.75 11.75C14.75 13.2688 13.5188 14.5 12 14.5C11.146 14.5 10.383 14.1108 9.87858 13.5H2.66957C2.69969 13.5782 2.73132 13.6573 2.76441 13.7369C2.92835 14.1316 3.13564 14.5594 3.39075 15H11.9994V16C14.3466 16 16.25 14.0972 16.25 11.75C16.25 9.40299 14.3463 7.50033 11.9994 7.5V8.5ZM11.9994 16H4.04434C4.15332 16.1484 4.26791 16.2966 4.38828 16.4437C4.68446 16.8057 5.0159 17.1616 5.38454 17.5H11.9994V16Z" fill="#212121" />
                                        </svg>
                                        <span className="ms-1">View details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeTopRatedProducts;
