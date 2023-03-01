import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./CategoryItems.css";

import { useSelector, useDispatch } from 'react-redux';
import {
    clearState,
    getStatus,
    getError,
    getPages,
    getPage,
    productDetailsAsync,
    selectListCatProducts,
    listCategoryProductsAsync,
} from "../../../../../app/productSlice";

import {
    addCartAsync,
} from "../../../../../app/cartSlice";

import {
    addWishlistItem,
    removeWishlistItem,
    getWishlistItems,
} from "../../../../../app/wishlistSlice";
import Meta from "../../Meta";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";



const CategoryItems = ({ paramsValue, urlLink }) => {

    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);
    // let [currentPage, setCurrentPage] = useState(0);
    // let [maxPage, setMaxPage] = useState(0);

    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const getProductStatus = useSelector(getStatus);
    const getProductsError = useSelector(getError);
    let maxPage = useSelector(getPages);
    let currPage = useSelector(getPage);
    const listCatProduct = useSelector(selectListCatProducts);
    const wishlistItems = useSelector(getWishlistItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { search } = useLocation();
    const pageNumber = new URLSearchParams(search).get("page");

    useEffect(() => {
        setCategory(id);
        dispatch(clearState());
    }, [dispatch, id]);

    useEffect(() => {
        setProducts(listCatProduct);
        dispatch(clearState());
    }, [dispatch, listCatProduct]);

    useEffect(() => {
        dispatch(clearState());
    }, [dispatch]);

    useEffect(() => {
        if (getProductStatus === "LOADING") {
            setLoading(true);
        }
        if (getProductStatus === "LOADED") {
            setProducts(listCatProduct);
            setLoading(false);
            dispatch(clearState());
        }
        if (getProductStatus === "ERROR") {
            setLoading(false);
            setErrorMessage(getProductsError);
            dispatch(clearState());
        }
    }, [getProductStatus, listCatProduct, getProductsError, dispatch]);

    useEffect(() => {
        dispatch(listCategoryProductsAsync({ category, pageNumber }));
        dispatch(clearState());
    }, [dispatch, category, pageNumber]);

    const handleAddCart = (id, name) => {
        dispatch(addCartAsync({ pId: id, qty: 1 }));
    }

    const handleLoadPrevPage = () => {
        setPage((prevState) => prevState - 1);
        let prevPage = page - 1;
        dispatch(listCategoryProductsAsync({ category, prevPage }));
        dispatch(clearState());
        navigate(`/category/${category}?page=${page - 1}`);
    }

    const handleLoadNextPage = () => {
        setPage((prevState) => prevState + 1);
        let nextPage = page + 1;
        dispatch(listCategoryProductsAsync({ category, nextPage }));
        dispatch(clearState());
        navigate(`/category/${category}?page=${page + 1}`);
    }

    const handleAddWishlist = (id, name, category, price, image) => {
        dispatch(addWishlistItem({ wId: id, name: name, category: category, price: price, image: image }));
    }

    const handleRemoveWishlist = (id) => {
        dispatch(removeWishlistItem(id));
    }

    const handleProductShow = (id) => {
        dispatch(productDetailsAsync(id));
        navigate(`/products/${id}`);
    }

    return (
        <>
            <Meta title = {`${category}`}/>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: `${category}`, link: `/${category}`, active: false }
                ]}
            />
            <div className="container my-3">
                <h4 className="text-center pb-5">{id}</h4>
                {loading ?
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-grow text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        {!errorMessage ?
                            "No products available in this moment."
                            :
                            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 g-sm-2 g-md-4 g-lg-5">
                                {products.map((product) => (
                                    <div key={product._id} className="col">
                                        <div className="card product_card p-0 p-md-0 m-0 shadow-sm rounded-0">
                                            <div className="position-relative">
                                                {wishlistItems.find((item) => item.wId === product._id) ?
                                                    <button type="button" className="btn btn-sm btn-default bg-light wishlist_button_active position-absolute top-0 end-0 p-1 mt-1 me-1 shadow opacity-75 rounded-circle"
                                                        onClick={() => handleRemoveWishlist(product._id)}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.38843 4.28963C7.69278 2.57693 4.94954 2.5686 3.26122 4.2739C1.5729 5.9792 1.58114 8.75004 3.27679 10.4627L9.55368 16.8028C9.81404 17.0657 10.2362 17.0657 10.4965 16.8028L16.7408 10.4994C18.4252 8.78856 18.4199 6.02549 16.7239 4.31249C15.0252 2.59671 12.2807 2.58838 10.5894 4.29673L9.99299 4.90026L9.38843 4.28963Z" fill="#212121" />
                                                        </svg>
                                                    </button>
                                                    :
                                                    <button type="button" className="btn btn-sm btn-default bg-light wishlist_button position-absolute top-0 end-0 p-1 mt-1 me-1 shadow opacity-75 rounded-circle"
                                                        onClick={() => handleAddWishlist(product._id, product.name, product.category, product.price, product.image)}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.4965 16.8028L16.7408 10.4994C18.4252 8.78856 18.4199 6.02549 16.7239 4.31249C15.0611 2.63292 12.3961 2.5895 10.6978 4.19086C10.6612 4.22539 10.6251 4.26068 10.5894 4.29673L9.99299 4.90026L9.38843 4.28963C9.35529 4.25616 9.32175 4.22333 9.28783 4.19116C7.58595 2.57726 4.91654 2.60193 3.26122 4.2739C1.5729 5.9792 1.58114 8.75004 3.27679 10.4627L9.55368 16.8028C9.81404 17.0657 10.2362 17.0657 10.4965 16.8028ZM11.3 5.00029C12.5964 3.69135 14.7025 3.69204 16.0133 5.01604C17.3253 6.34123 17.3272 8.47734 16.0292 9.79681L16.0282 9.79783L10.0252 15.8577L3.98743 9.75919C2.67408 8.43263 2.67286 6.28953 3.97185 4.97746C5.26525 3.67106 7.36984 3.67208 8.6778 4.99319L9.63801 5.96306C9.8338 6.16082 10.1534 6.16067 10.349 5.96272L11.3 5.00029Z" fill="#212121" />
                                                        </svg>
                                                    </button>
                                                }
                                                {product.countInStock < 1 && <span className="product-card-label position-absolute top-0 start-0 mt-3 ms-5 translate-middle badge bg-light-subtle text-muted rounded-pill z-index-1" style={{ zIndex: 1000 }}>Out of Stock</span>}
                                            </div>
                                            {/* <img src="./assets/images/productImages/product1.jpg" className="card-img-top rounded-4" alt="card 1" /> */}
                                            <img src={product.image} onClick={() => handleProductShow(product._id)} className="card-img-top rounded-0" alt="card 1" />
                                            <div className="card-body px-2 py-1">
                                                <div onClick={() => navigate(`/products/${product.name}`)}>
                                                    <p className="my-0 text-muted small"><small>{product.category}</small></p>
                                                    <p className="card-title mt-0 lh-1 my-md-1">{product.name}</p>
                                                    <span className="lh-sm my-0 d-flex justify-content-start align-items-center">
                                                        <ReactStars {...{
                                                            size: 15,
                                                            count: 5,
                                                            color: "#feeecc",
                                                            activeColor: "#fdad01",
                                                            value: product.rating,
                                                            a11y: true,
                                                            edit: false,
                                                            isHalf: true
                                                        }}
                                                        />
                                                        <span className="ps-1 text-muted" style={{ fontSize: "12px" }}><span className="fw-600">{product.rating}</span> ({product.numReviews})</span>
                                                    </span>
                                                    <p className="fw-bold lh-1 my-2">₹{product.price}</p>
                                                </div>
                                                {!product.countInStock > 0 ?
                                                    <button type="button" className="btn bg-warning w-100 d-flex justify-content-center align-items-center">
                                                        <span className="ms-1">View Details</span>
                                                    </button>
                                                    :
                                                    <button type="button" className="btn bg-warning w-100 d-flex justify-content-center align-items-center"
                                                        // onClick={() => dispatch(addCartAsync({ pId: product._id, qty: 1 }))}>
                                                        onClick={() => handleAddCart(product._id, product.name)}>
                                                        <i className="bi bi-cart"></i>
                                                        <span className="ms-1">Add to cart</span>
                                                        <ToastContainer className="mb-sm-1 text-start fs-6 small" />
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }

                        <div className="text-end mt-5">
                            {maxPage > 1 && (
                                <>
                                    <button className={page <= 1 ? "btn btn-outline-danger mx-2 px-4 px-md-4 disabled" : "btn btn-danger mx-2 px-4 px-md-4"}
                                        // disabled={page === 1}
                                        onClick={() => handleLoadPrevPage()}
                                    > Prev </button>
                                    <button className={page >= maxPage ? "btn btn-outline-danger mx-2 px-4 px-md-4 disabled" : "btn btn-danger mx-2 px-4 px-md-4"}
                                        onClick={() => handleLoadNextPage()}
                                    > Next </button>
                                </>
                            )}
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default CategoryItems;