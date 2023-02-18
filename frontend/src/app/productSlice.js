import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    pages: 0,
    page: 0,
    product: {},
    toprated: [],
    featured: [],
    status: 'IDLE',
    error: ''
};

const PRODUCT = 'product'
const PRODUCTS_LISTPRODUCTS = 'product/listProduct';
const PRODUCT_DETAILS = 'product/productDeatils';
const PRODUCTS_TOPRATED = 'product/productTopRated';
const PRODUCTS_FEATURED = 'product/productFeatured';


export const listProductAsync = createAsyncThunk(
    PRODUCTS_LISTPRODUCTS,
    async ({ keyword, pageNumber }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post(`/api/products/?keyword=${keyword}&pageNumber=${pageNumber}`, config,);
            // localStorage.setItem('user', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const productDetailsAsync = createAsyncThunk(
    PRODUCT_DETAILS,
    async ({ pId }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const productURI = '/api/products/' + pId;
            const response = await axios.get(productURI, config,);
            // localStorage.setItem('user', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const productsTopratedAsync = createAsyncThunk(
    PRODUCTS_TOPRATED,
    async ({pId}, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.get('/api/products/top', config,);
            // localStorage.setItem('topRated', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const productsFeaturedAsync = createAsyncThunk(
    PRODUCTS_FEATURED,
    async ({ categoryName, pageSize }, thunkAPI) => {
        try {
            // categoryName = '' and pageSize = 3
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.get(`/api/products/featured/${categoryName}?pageSize=${pageSize}`, config,);
            // localStorage.setItem('featured', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const productSlice = createSlice({
    name: PRODUCT,
    initialState,
    reducers: {
        clearState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        clearProductDetails: (state) => {
            state.status = 'IDLE';
            state.product = {};
            return state;
        },
        clearProductsTopRated: (state) => {
            state.status = 'IDLE';
            state.toprated = [];
            // localStorage.setItem('topRated', JSON.stringify(state.toprated));
            return state;
        },
        clearProductsFeatured: (state) => {
            state.status = 'IDLE';
            state.featured = [];
            // localStorage.setItem('featured', JSON.stringify(state.featured));
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            // product details page wise
            .addCase(listProductAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(listProductAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.products = JSON.parse(action.payload.products);
                state.page = JSON.parse(action.payload.page);
                state.pages = JSON.parse(action.payload.pages);
            })
            .addCase(listProductAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
            // Single product details
            .addCase(productDetailsAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(productDetailsAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.product = JSON.parse(action.payload);
            })
            .addCase(productDetailsAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
            // Products Top rated
            .addCase(productsTopratedAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(productsTopratedAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.toprated = JSON.parse(action.payload);
            })
            .addCase(productsTopratedAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
            // Products Featured
            .addCase(productsFeaturedAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(productsFeaturedAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.featured = JSON.parse(action.payload);
            })
            .addCase(productsFeaturedAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
    },
});

export const { clearState, clearProductDetails, clearProductsTopRated, clearProductsFeatured } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectProduct = (state) => state.product.product;
export const selectTopratedProducts = (state) => state.product.toprated;
export const selectFeaturedProducts = (state) => state.product.featured;
export const selectProductStatus = (state) => state.products.status;
export const selectProductErrorMessage = (state) => state.products.errorMessage;

export default productSlice.reducer;