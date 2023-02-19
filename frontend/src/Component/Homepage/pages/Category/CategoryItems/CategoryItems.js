import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import "./CategoryItems.css";

import { useSelector, useDispatch } from 'react-redux';
import {
    clearState,
    getStatus,
    getError,
    getPages,
    getPage,
    selectListCatProducts,
    listCategoryProductsAsync,
} from "../../../../../app/productSlice";

const CategoryItems = ({ paramsValue, urlLink }) => {

    const [category, setCategory] = useState("");
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    const getProductStatus = useSelector(getStatus);
    const getProductError = useSelector(getError);
    const getMaxPage = useSelector(getPages);
    const getCurrPage = useSelector(getPage);
    const listCatProduct = useSelector(selectListCatProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        setCategory(paramsValue);
    }, [paramsValue]);

    useEffect(() => {
        setProducts(listCatProduct);
    }, [listCatProduct]);

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);
    useEffect(() => {
        if (getProductStatus === "LOADING") {
            setLoading(true);
            dispatch(clearState());
        }
        if (getProductStatus === "LOADED") {
            dispatch(clearState());
            setLoading(false);
        }
        if (getProductStatus === "ERROR") {
            setErrorMessage(getProductError);
            setLoading(false);
            dispatch(clearState());
        }
    }, [getProductStatus, listCatProduct, getProductError, dispatch]);

    useEffect(() => {
        dispatch(listCategoryProductsAsync({ category, page }));
        dispatch(clearState());
    }, [dispatch, page, category]);

    return (
        <div className="container my-5">
            <h4 className="text-center">{paramsValue}</h4>
            {/* <span className="my-4 text-center">{urlLink}</span> */}
            {loading}
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 g-sm-2 g-md-4 g-lg-5">
                {products && products.map((product) => (
                    <div key={product._id} className="col">
                        <div className="card p-0 m-0 shadow-sm rounded-4">
                            <div className="position-relative">
                                <button type="button" className="btn btn-sm btn-default bg-light position-absolute top-0 end-0 p-2 mt-1 me-1 shadow opacity-75 rounded-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912ZM19.3684 12.1206L12.0002 19.4842L4.63521 12.1191C3.12192 10.6058 3.12192 8.15232 4.63521 6.63904C6.14849 5.12575 8.602 5.12575 10.1153 6.63904L11.4727 7.99648C11.7706 8.29435 12.2553 8.28854 12.5459 7.98363L13.8806 6.63978C15.3977 5.12268 17.8528 5.12268 19.3699 6.63978C20.8836 8.15343 20.881 10.5997 19.3684 12.1206Z" fill="#212121" />
                                    </svg>
                                </button>
                            </div>
                            <img src="./assets/images/productImages/product1.jpg" className="card-img-top rounded-4" alt="card 1" />
                            <div className="card-body p-2">
                                <p className="card-title lh-1 my-0 my-md-1"><small><b>{product.name}</b></small></p>
                                <p className="lh-1 my-0 text-muted"><small>{product.category}</small></p>
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
                                <button type="button" className="btn bg-warning w-100 d-flex justify-content-center align-items-center">
                                    <i className="bi bi-cart"></i>
                                    <span className="ms-1">Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-end mt-5">
                {
                    page >= 0 ?
                        <button className="btn btn-outline-dark disabled mx-2 px-2 px-md-4"
                            onClick={() => setPage(getCurrPage - 1)}>
                            Prev
                        </button>
                        :
                        <button className="btn btn-outline-dark mx-2 px-2 px-md-4"
                            onClick={() => setPage(getCurrPage - 1)}>
                            Prev
                        </button>
                }
                {
                    page === getMaxPage ?
                        <button className="btn btn-outline-dark disabled mx-2 px-2 px-md-4"
                            onClick={() => setPage(getCurrPage + 1)}>
                            Next
                        </button>
                        :
                        <button className="btn btn-outline-dark mx-2 px-2 px-md-4"
                            onClick={() => setPage(getCurrPage + 1)}>
                            Next
                        </button>
                }
            </div>
            {errorMessage}
        </div>
    );
}

export default CategoryItems;