import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// import { ToastContainer } from 'react-toastify';
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
    getListCartItems,
} from "../../../../../app/cartSlice";

import {
    addWishlistItem,
    removeWishlistItem,
    getWishlistItems,
} from "../../../../../app/wishlistSlice";

import {
    selectUser,
} from "../../../../../app/userSlice";

import Meta from "../../Meta";
import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import { toast } from "react-toastify";



const CategoryItems = () => {

    let currINR = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    const [category, setCategory] = useState("");
    // const [catName, setCatName] = useState("");
    const [page, setPage] = useState(1);
    // let [currentPage, setCurrentPage] = useState(0);
    // let [maxPage, setMaxPage] = useState(0);

    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const user = useSelector(selectUser);
    const getProductStatus = useSelector(getStatus);
    const getProductsError = useSelector(getError);
    let maxPage = useSelector(getPages);
    let currPage = useSelector(getPage);
    const listCatProduct = useSelector(selectListCatProducts);
    const wishlistItems = useSelector(getWishlistItems);
    const cartItems = useSelector(getListCartItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    let catName = '';
    let className = '';

    if (id === 'newCollections') {
        catName = 'New Collections';
    } else if (id === 'DressMaterial') {
        catName = 'Dress Material';
    }

    if (category === 'Fabrics') {
        className = 'product-item-two';
    } else {
        className = 'product-item';
    }

    const { search } = useLocation();
    const pageNumber = new URLSearchParams(search).get("page");

    // useEffect(() => {
    //     if (id === 'isNewInStore') {
    //         setCatName('New In Store');
    //     }
    //     else if(id === 'DressMaterial') {
    //         setCatName('Dress Material');   
    //     } else {
    //         setCatName(id);
    //     }
    // }, [dispatch]);

    useEffect(() => {
        setCategory(id);
        setPage(1);
        // dispatch(clearState());
    }, [dispatch, id]);

    useEffect(() => {
        setProducts(listCatProduct);
        dispatch(clearState());
        window.scrollTo(0, 0);
    }, [dispatch, listCatProduct]);

    // useEffect(() => {
    //     setProducts(listCatProduct);
    //     dispatch(clearState());
    // }, [dispatch, listCatProduct]);

    useEffect(() => {
        if (getProductStatus === "LOADING") {
            setLoading(true);
            dispatch(clearState());
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
        if (user && user.token) {
            // dispatch(userVerifyAsync());
            dispatch(addCartAsync({ pId: id, qty: 1 }));
        } else {
            navigate('/login');
        }
    }
    const handleNotifyProduct = (id, name) => {
        if (user && user.token) {
            // dispatch(userVerifyAsync());
            toast.success(`Product ${name} saved.`);
        } else {
            toast.warning('Please login to save the items into cart');
            navigate('/login');
        }
        // dispatch(addProductNotify({ pId: id, user: user.id }));
    }


    const handleLoadPrevPage = () => {
        setPage((prevState) => prevState - 1);
        let prevPage = page - 1;
        dispatch(listCategoryProductsAsync({ category, prevPage }));
        dispatch(clearState());
        // navigate(`/category/${category}?page=${page - 1}`);
        navigate(`/category/${category}?page=${prevPage}`);
    }

    const handleLoadNextPage = () => {
        setPage((prevState) => prevState + 1);
        let nextPage = page + 1;
        dispatch(listCategoryProductsAsync({ category, nextPage }));
        dispatch(clearState());
        // navigate(`/category/${category}?page=${page + 1}`);
        navigate(`/category/${category}?page=${nextPage}`);
    }

    const handleLoadCustomPage = (customPage) => {
        setPage((prevState) => customPage);
        // setPage(customPage);
        dispatch(listCategoryProductsAsync({ category, customPage }));
        dispatch(clearState());
        navigate(`/category/${category}?page=${customPage}`);
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
            <Meta title={`${category}`} />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: `${catName ? catName : id}`, link: `/${category}`, active: true }
                ]}
            />
            <div className="bg-light">
                <div className="container-fluid container-md py-3">
                    {/* <h5 className="text-center text-decoration-underline pb-3 heading">{catName ? catName : id}</h5> */}
                    <div className="my-5 text-center">
                        <span class="position-relative">
                            <span className="fs-2 text-dark text-decoration-underline heading">{catName ? catName : id}</span>
                            <span class="position-absolute top-50 start-50 translate-middle ms-3 z-n1">
                                <svg width="300px" height="62.1px" enable-background="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#fff39e" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                                </svg>
                            </span>
                        </span>
                    </div>
                    {loading &&
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-grow text-info" role="status">
                                {/* <span className="visually-hidden">Loading...</span> */}
                            </div>
                        </div>
                    }
                    {errorMessage === '' && <>{errorMessage}</>}
                    {products.length === 0 ?
                        <p className="text-center px-4">
                            <strong>
                                {/* Sorry! No products available for this category in this moment. */}
                            </strong>
                        </p>
                        :
                        // <div className="row">
                        //     <div className="col-12 col-md-4"></div>
                        //     <div className="col-12 col-md-8">
                        // <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-3 g-sm-3 g-md-4 g-lg-4">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-sm-3 g-md-2 g-lg-5">
                            {products.map((product) => (
                                <div key={product._id} className="col">
                                    {/* <div className="card product-card bg-light p-0 p-md-0 m-0 shadow-0 rounded-0 border border-0"> */}
                                    <div className={`card ${className} bg-light p-0 p-md-0 m-0 rounded-0 border border-0`} style={{ boxShadow: 'none' }}>
                                        {/* <div className="position-relative"> */}
                                        {/* {wishlistItems.find((item) => item.wId === product._id) ?
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
                                            } */}
                                        {/* {product.countInStock < 1 && <span className="product-card-label position-absolute top-0 start-0 mt-3 ms-5 translate-middle badge bg-light-subtle text-muted rounded-pill z-index-1" style={{ zIndex: 1000 }}>Out of Stock</span>}
                                        {product.countInStock > 1 && product.newCollection && <span className="product-card-label position-absolute top-0 start-0 mt-3 ms-4 translate-middle badge bg-success-subtle text-success rounded-pill z-index-1" style={{ zIndex: 999 }}>New</span>} */}
                                        {
                                            product.countInStock < 1 ?
                                                <span className="position-absolute top-0 start-0 mt-3 ms-5 translate-middle badge bg-danger text-light rounded-pill text-uppercase fw-semibold z-index-1" style={{ zIndex: 1000 }}><small>Out of Stock</small></span>
                                                :
                                                product.newCollection && <span className="position-absolute top-0 start-0 mt-3 ms-4 translate-middle badge bg-success text-light rounded-pill text-uppercase fw-semibold z-index-1" style={{ zIndex: 999 }}><small>New</small></span>
                                        }
                                        {/* </div> */}
                                        {/* <div className="position-relative">
                                                {wishlistItems.find((item) => item.wId === product._id) ?
                                                    <button type="button" className="btn btn-sm btn-default bg-light wishlist_button_active position-absolute top-100 end-100 p-1 mt-1 me-1 shadow opacity-75 rounded-circle"
                                                        onClick={() => handleRemoveWishlist(product._id)}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.38843 4.28963C7.69278 2.57693 4.94954 2.5686 3.26122 4.2739C1.5729 5.9792 1.58114 8.75004 3.27679 10.4627L9.55368 16.8028C9.81404 17.0657 10.2362 17.0657 10.4965 16.8028L16.7408 10.4994C18.4252 8.78856 18.4199 6.02549 16.7239 4.31249C15.0252 2.59671 12.2807 2.58838 10.5894 4.29673L9.99299 4.90026L9.38843 4.28963Z" fill="#212121" />
                                                        </svg>
                                                    </button>
                                                    :
                                                    <button type="button" className="btn btn-sm btn-default bg-light wishlist_button position-absolute top-100 end-100 p-1 mt-1 me-1 shadow opacity-75 rounded-circle"
                                                        onClick={() => handleAddWishlist(product._id, product.name, product.category, product.price, product.image)}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.4965 16.8028L16.7408 10.4994C18.4252 8.78856 18.4199 6.02549 16.7239 4.31249C15.0611 2.63292 12.3961 2.5895 10.6978 4.19086C10.6612 4.22539 10.6251 4.26068 10.5894 4.29673L9.99299 4.90026L9.38843 4.28963C9.35529 4.25616 9.32175 4.22333 9.28783 4.19116C7.58595 2.57726 4.91654 2.60193 3.26122 4.2739C1.5729 5.9792 1.58114 8.75004 3.27679 10.4627L9.55368 16.8028C9.81404 17.0657 10.2362 17.0657 10.4965 16.8028ZM11.3 5.00029C12.5964 3.69135 14.7025 3.69204 16.0133 5.01604C17.3253 6.34123 17.3272 8.47734 16.0292 9.79681L16.0282 9.79783L10.0252 15.8577L3.98743 9.75919C2.67408 8.43263 2.67286 6.28953 3.97185 4.97746C5.26525 3.67106 7.36984 3.67208 8.6778 4.99319L9.63801 5.96306C9.8338 6.16082 10.1534 6.16067 10.349 5.96272L11.3 5.00029Z" fill="#212121" />
                                                        </svg>
                                                    </button>
                                                }
                                            </div> */}
                                        {/* <img src="./assets/images/productImages/product1.jpg" className="card-img-top rounded-4" alt="card 1" /> */}
                                        {/* <div className="product-item"> */}
                                        {/* <img src={product.image} onClick={() => handleProductShow(product._id)} className="card-img-top bg-light" alt="card 1" /> */}
                                        {/* <div class="product-image-container">
                                                <img src={product.image} onClick={() => handleProductShow(product._id)} className="product-image rounded-4" alt="card 1" />
                                            </div> */}
                                        <div className={`${className}`}>
                                            <div className=
                                                {
                                                    className === 'product-item-two' ? 'product-two' : 'product'
                                                }>

                                                {/* <img src={product.image} onClick={() => handleProductShow(product._id)} className="" alt="card 1" /> */}
                                                <img src={`/assets${product.image}`}
                                                    srcset={`/assets${product.image} 480w, /assets${product.image} 800w`}
                                                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 800px" alt={`/assets${product.image}`} />
                                                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                                                    <li class="icon" onClick={() => handleProductShow(product._id)}>
                                                        <i class="bi bi-eye"></i>
                                                    </li>
                                                    {wishlistItems.find((item) => item.wId === product._id) ?
                                                        <li class="icon active mx-3" onClick={() => handleRemoveWishlist(product._id)}>
                                                            <i class="bi bi-heart-fill"></i>
                                                        </li>
                                                        :
                                                        <li class="icon mx-3" onClick={() => handleAddWishlist(product._id, product.name, product.category, product.price, product.image)}>
                                                            <i class="bi bi-heart"></i>
                                                        </li>
                                                    }
                                                    {product.countInStock < 1 ?
                                                        <li class="icon" onClick={() => handleNotifyProduct(product._id, product.name)}>
                                                            <i class="bi bi-bell"></i>
                                                        </li>
                                                        :
                                                        <>
                                                            {
                                                                cartItems.find((item) => item.pId === product._id) ?
                                                                    <li class="icon active" onClick={() => handleAddCart(product._id, product.name)}>
                                                                        <i class="bi bi-cart-fill"></i>
                                                                    </li>
                                                                    :
                                                                    <li class="icon" onClick={() => handleAddCart(product._id, product.name)}>
                                                                        <i class="bi bi-cart"></i>
                                                                    </li>
                                                            }
                                                        </>
                                                    }
                                                    {/* <li class="icon mx-3" onClick={() => handleAddCart(product._id, product.name)}>
                                                        <i class="bi bi-cart"></i>
                                                        <i class="bi bi-cart-fill"></i>
                                                    </li> */}

                                                </ul>
                                            </div>
                                        </div>
                                        {/* onClick={() => handleAddCart(product._id, product.name)}> */}
                                        {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.99707 3.49609C2.99707 3.21995 3.22093 2.99609 3.49707 2.99609H3.93543C4.66237 2.99609 5.07976 3.46917 5.32152 3.94075C5.4872 4.2639 5.6065 4.65813 5.70508 4.99951H15.9999C16.6634 4.99951 17.1429 5.63392 16.9619 6.27229L15.4664 11.5468C15.2225 12.4073 14.4368 13.0012 13.5423 13.0012H8.46306C7.56125 13.0012 6.77099 12.3977 6.5336 11.5277L5.89118 9.17338C5.88723 9.16268 5.88361 9.15177 5.88034 9.14067L4.851 5.6429C4.81568 5.52686 4.78318 5.41439 4.7518 5.3058C4.65195 4.96027 4.56346 4.65406 4.43165 4.39696C4.2723 4.08613 4.12597 3.99609 3.93543 3.99609H3.49707C3.22093 3.99609 2.99707 3.77224 2.99707 3.49609ZM6.84471 8.86872L7.49833 11.2645C7.61702 11.6995 8.01215 12.0012 8.46306 12.0012H13.5423C13.9895 12.0012 14.3824 11.7043 14.5044 11.274L15.9999 5.99951H6.00063L6.84471 8.86872ZM10 15.4995C10 16.3279 9.32843 16.9995 8.5 16.9995C7.67157 16.9995 7 16.3279 7 15.4995C7 14.6711 7.67157 13.9995 8.5 13.9995C9.32843 13.9995 10 14.6711 10 15.4995ZM9 15.4995C9 15.2234 8.77614 14.9995 8.5 14.9995C8.22386 14.9995 8 15.2234 8 15.4995C8 15.7757 8.22386 15.9995 8.5 15.9995C8.77614 15.9995 9 15.7757 9 15.4995ZM15 15.4995C15 16.3279 14.3284 16.9995 13.5 16.9995C12.6716 16.9995 12 16.3279 12 15.4995C12 14.6711 12.6716 13.9995 13.5 13.9995C14.3284 13.9995 15 14.6711 15 15.4995ZM14 15.4995C14 15.2234 13.7761 14.9995 13.5 14.9995C13.2239 14.9995 13 15.2234 13 15.4995C13 15.7757 13.2239 15.9995 13.5 15.9995C13.7761 15.9995 14 15.7757 14 15.4995Z" fill="#fff" />
                                                    </svg> */}
                                        {/* <div className="position-relative">
                                                {!product.countInStock > 0 ?
                                                    <button type="button" className="d-flex justify-content-between align-items-center btn btn-sm btn-default bg-dark text-white position-absolute wishlist_button bottom-0 end-0 px-2 mb-1 me-1 shadow opacity-75 rounded-pill">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z" fill="#fff" />
                                                        </svg>
                                                        <span className="ms-1 small">View Details</span>
                                                    </button>
                                                    :
                                                    <button type="button" className="d-flex justify-content-between align-items-center btn btn-sm btn-default bg-dark text-white position-absolute wishlist_button bottom-0 end-0 px-2 mb-1 me-1 shadow opacity-75 rounded-pill"
                                                        onClick={() => handleAddCart(product._id, product.name)}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.99707 3.49609C2.99707 3.21995 3.22093 2.99609 3.49707 2.99609H3.93543C4.66237 2.99609 5.07976 3.46917 5.32152 3.94075C5.4872 4.2639 5.6065 4.65813 5.70508 4.99951H15.9999C16.6634 4.99951 17.1429 5.63392 16.9619 6.27229L15.4664 11.5468C15.2225 12.4073 14.4368 13.0012 13.5423 13.0012H8.46306C7.56125 13.0012 6.77099 12.3977 6.5336 11.5277L5.89118 9.17338C5.88723 9.16268 5.88361 9.15177 5.88034 9.14067L4.851 5.6429C4.81568 5.52686 4.78318 5.41439 4.7518 5.3058C4.65195 4.96027 4.56346 4.65406 4.43165 4.39696C4.2723 4.08613 4.12597 3.99609 3.93543 3.99609H3.49707C3.22093 3.99609 2.99707 3.77224 2.99707 3.49609ZM6.84471 8.86872L7.49833 11.2645C7.61702 11.6995 8.01215 12.0012 8.46306 12.0012H13.5423C13.9895 12.0012 14.3824 11.7043 14.5044 11.274L15.9999 5.99951H6.00063L6.84471 8.86872ZM10 15.4995C10 16.3279 9.32843 16.9995 8.5 16.9995C7.67157 16.9995 7 16.3279 7 15.4995C7 14.6711 7.67157 13.9995 8.5 13.9995C9.32843 13.9995 10 14.6711 10 15.4995ZM9 15.4995C9 15.2234 8.77614 14.9995 8.5 14.9995C8.22386 14.9995 8 15.2234 8 15.4995C8 15.7757 8.22386 15.9995 8.5 15.9995C8.77614 15.9995 9 15.7757 9 15.4995ZM15 15.4995C15 16.3279 14.3284 16.9995 13.5 16.9995C12.6716 16.9995 12 16.3279 12 15.4995C12 14.6711 12.6716 13.9995 13.5 13.9995C14.3284 13.9995 15 14.6711 15 15.4995ZM14 15.4995C14 15.2234 13.7761 14.9995 13.5 14.9995C13.2239 14.9995 13 15.2234 13 15.4995C13 15.7757 13.2239 15.9995 13.5 15.9995C13.7761 15.9995 14 15.7757 14 15.4995Z" fill="#fff" />
                                                        </svg>
                                                        <span className="ms-1 small">ADD CART</span>
                                                        <ToastContainer className="mb-sm-1 text-start fs-6 small" />
                                                    </button>
                                                }
                                            </div> */}
                                        {/* </div> */}
                                        <div className="card-body bg-light px-1 py-1" style={{ boxShadow: 'none' }}>
                                            {/* <div onClick={() => navigate(`/products/${product.name}`)}> */}
                                            <div onClick={() => handleProductShow(product._id)}>
                                                {/* <p className="my-0 text-muted small"><small>{product.category}</small></p>
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
                                                    <p className="fw-bold lh-1 my-2">₹{product.price}</p> */}
                                                {/* <div className="d-flex flex-0 justify-content-between align-items-center">
                                                <p className="my-0 fw-normal text-muted small" style={{ fontSize: "11px" }}>
                                                    <small>{product.category}</small>
                                                </p>
                                                <span className="lh-sm my-0 d-flex justify-content-start align-items-center">
                                                    <ReactStars {...{
                                                        size: 10,
                                                        count: 5,
                                                        activeColor: "#fdad01",
                                                        value: product.rating,
                                                        a11y: true,
                                                        isHalf: true,
                                                        emptyIcon: <i className="bi bi-star" />,
                                                        halfIcon: <i className="bi bi-star-half" />,
                                                        filledIcon: <i className="bi bi-star-fill" />,
                                                        edit: false,
                                                    }}
                                                    />
                                                    <span className="ps-1 fw-semibold text-muted small" style={{ fontSize: "12px", fontWeight: 400 }}>
                                                        <span className="fw-600">{product.rating}</span>
                                                        ({product.numReviews})
                                                    </span>
                                                </span>
                                            </div> */}
                                                {/* <p className="fw-semibold p-0 m-0" style={{ fontSize: "12px" }}>
                                                {product.name}
                                            </p>
                                            <p className="text-muted p-0 m-0" style={{ fontSize: "14px" }}>
                                                <span>₹{product.price}</span>
                                                {product.salePrice > 0 &&
                                                    <span className="ms-2 text-decoration-line-through text-danger">₹{product.salePrice}</span>
                                                }
                                            </p> */}
                                                <p className="fw-normal text-uppercase p-0 m-0 mb-1" style={{ fontSize: "14px" }}>
                                                    <small>{product.name}</small>
                                                </p>
                                                <p className="text-dark fw-semibold p-0 m-0 mb-1" style={{ fontSize: "15px" }}>
                                                    <span>{currINR.format(product.price)}</span>
                                                    {product.salePrice > 0 &&
                                                        <>
                                                            {/* <span className="ms-2 text-decoration-line-through text-danger">₹{product.salePrice}</span> */}
                                                            <span className="ms-2 text-decoration-line-through text-danger">
                                                                {currINR.format(product.salePrice)}
                                                            </span>
                                                        </>
                                                    }
                                                </p>
                                                <span className="d-flex justify-content-start align-items-center">
                                                    <ReactStars {...{
                                                        size: 11,
                                                        count: 5,
                                                        activeColor: "#fdad01",
                                                        value: product.rating,
                                                        a11y: true,
                                                        isHalf: true,
                                                        emptyIcon: <i className="bi bi-star" />,
                                                        halfIcon: <i className="bi bi-star-half" />,
                                                        filledIcon: <i className="bi bi-star-fill" />,
                                                        edit: false,
                                                    }}
                                                    />
                                                    <span className="fw-normal text-muted ms-1" style={{ fontSize: "12px" }}>
                                                        <span className="">{product.rating} </span>
                                                        ({product.numReviews})
                                                    </span>
                                                </span>
                                            </div>
                                            {/* {!product.countInStock > 0 ?
                                            <button type="button" className="btn btn-sm btn-md bg-warning w-100 d-flex justify-content-center align-items-center">
                                                <span className="ms-1">View Details</span>
                                            </button>
                                            :
                                            <button type="button" className="btn btn-sm bg-warning w-100 d-flex justify-content-center align-items-center"
                                                // onClick={() => dispatch(addCartAsync({ pId: product._id, qty: 1 }))}>
                                                onClick={() => handleAddCart(product._id, product.name)}>
                                                <i className="bi bi-cart d-none d-sm-inline"></i>
                                                <span className="ms-1 fw-semibold">ADD TO CART</span>
                                                <ToastContainer className="mb-sm-1 text-start fs-6 small" />
                                            </button>
                                        } */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                    <div className="mt-5">
                        {maxPage > 1 && (
                            <>
                                <div className="input-group input-group-sm justify-content-end">
                                    <button className={currPage <= 1 ? "btn btn-dark me-2 pagination_btn rounded-circle disabled" : "btn btn-outline-dark me-2 pagination_btn rounded-circle"}
                                        onClick={() => handleLoadPrevPage()}
                                    >
                                        <i class="bi bi-chevron-left m-0 p-0"></i>
                                    </button>
                                    {(() => {
                                        const rows = [];
                                        for (let index = 1; index <= maxPage; index++) {
                                            rows.push(
                                                <button className={currPage === index ? "btn btn-dark me-2 pagination_btn rounded-circle disabled" : "btn btn-outline-dark me-2 pagination_btn rounded-circle"}
                                                    onClick={() => handleLoadCustomPage(index)}
                                                > {index} </button>
                                            );
                                        }
                                        return rows;
                                    })()}
                                    <button className={currPage > maxPage || currPage === maxPage ? 'btn btn-dark pagination_btn rounded-circle disabled' : 'btn btn-outline-dark pagination_btn rounded-circle'}
                                        onClick={() => handleLoadNextPage()}
                                    >
                                        <i class="bi bi-chevron-right py-2"></i>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div >
            </div >
        </>
    );
}

export default CategoryItems;