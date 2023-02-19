import React, { useEffect, useState } from "react";

import "./CategoryItems.css";

import { useSelector, useDispatch } from 'react-redux';
import {
    clearState,
    getStatus,
    getError,
    getPages,
    getPage,
    // selectListCatProducts,
    listCategoryProductsAsync,
} from "../../../../../app/productSlice";
import { useNavigate } from "react-router-dom";

const CategoryItems = ({ paramsValue, urlLink }) => {

    const [category, setCategory] = useState("");

    const [page, setPage] = useState(0);

    const getProductStatus = useSelector(getStatus);
    const getProductError = useSelector(getError);
    const getMaxPage = useSelector(getPages);
    const getCurrPage = useSelector(getPage);
    // const listCatProduct = useSelector(selectListCatProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    }, [getProductStatus, getProductError, dispatch, navigate]);
    
    useEffect(() => {
        setCategory(paramsValue);
    }, [paramsValue]);

    useEffect(() => {
        dispatch(listCategoryProductsAsync(category, page));
        dispatch(clearState());
    }, [dispatch, page, category]);

    let pageArray = [];
    for (let i = 0; i < getMaxPage; i++) {
        <>
            {
                i === 0 ?
                    <li className="page-item disabled">
                        <a href="/" className="page-link">Previous</a>
                    </li>
                    :
                    <li className="page-item">
                        <button className="btn btn-default page-link" onClick={() => setPage(i--)} >Previous</button>
                    </li>
            }
            {
                i === getCurrPage ?
                    <li className="page-item active disabled">
                        <button className="btn btn-default page-link" onClick={() => setPage(i)}>{i}</button>
                    </li>
                    :
                    <li className="page-item">
                        <button className="btn btn-default page-link" onClick={() => setPage(i)}>{i}</button>
                    </li>
            }
            {/* {
                i === getMaxPage && getMaxPage === getCurrPage ?
                    <li className="page-item disabled">
                        <button className="btn btn-default page-link" onClick={() => setPage(i)} >Next</button>
                    </li>
                    :
                    { i === getMaxPage ?
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                        :
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    }
            } */}
        </>
    }

    return (
        <div className="container my-5 text-center">
            <h4>{paramsValue}</h4>
            <span className="my-4">{urlLink}</span>
            {loading ?
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                </div>
                :
                <>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {pageArray}
                        </ul>
                    </nav>
                </>
            }
            {errorMessage}
        </div>
    );
}

export default CategoryItems;