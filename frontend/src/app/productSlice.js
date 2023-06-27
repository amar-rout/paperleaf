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
const PRODUCTS_LISTCAT = 'product/productCatList';


export const listProductAsync = createAsyncThunk(
    PRODUCTS_LISTPRODUCTS,
    async ({ keyword, pageNumber }, thunkAPI) => {
        try {
            if (pageNumber === '') {
                pageNumber = 1;
            }
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
    async (pId, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const productURI = '/api/products/' + pId;
            const response = await axios.get(productURI, config,);
            // localStorage.setItem('user', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(response.data);
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
            const response = await axios.get('/api/products/top/', config,);
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
            categoryName = '';
            pageSize = 8;
            const config = { headers: { 'Content-Type': 'application/json', }, };
            // if (categoryName.endsWith('Collection')) {
            //     const response = await axios.get(`/api/products/featured/${categoryName}?pageSize=${pageSize}`, config,);   
            // } else {
                const response = await axios.get(`/api/products/featured/${categoryName}?pageSize=${pageSize}`, config,);
            // }
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

export const listCategoryProductsAsync = createAsyncThunk(
    PRODUCTS_LISTCAT,
    async ({ category, pageNumber }, thunkAPI) => {
        try {
            if (pageNumber === undefined || pageNumber === null || pageNumber === 0) {
                pageNumber = 1;
                // console.log(`Category: ${category} and Page No: ${pageNumber}`);
            }
            const config = { headers: { 'Content-Type': 'application/json', }, };
            // if (category.endsWith("Collection")) {
            //     const response = await axios.get(`/api/products/category/${category}?pageNumber=${pageNumber}`, config,);    
            // } else {
                const response = await axios.get(`/api/products/category/${category}?pageNumber=${pageNumber}`, config,);
            // }
            
            // const response = await axios.get(`/api/products/category/Kurtas?pageNumber=1`, config,);
            // localStorage.setItem('featured', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(response.data);
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
        clearListCategoryProducts: (state) => {
            state.status = 'IDLE';
            state.products = [];
            state.pages = 0;
            state.page = 0;
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
                state.error = '';
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
                state.product = action.payload;
                state.error = '';
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
                state.error = '';
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
                state.error = '';
            })
            .addCase(productsFeaturedAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
            //List cat products
            .addCase(listCategoryProductsAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(listCategoryProductsAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.products = action.payload.products;
                state.pages = action.payload.pages;
                state.page = action.payload.page;
                state.error = '';
            })
            .addCase(listCategoryProductsAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                // state.products = [];
                // state.pages = 0;
                // state.page = 0;
                state.error = action.payload.error;
            })
    },
});

export const { clearState, clearProductDetails, clearProductsTopRated, clearProductsFeatured, clearListCategoryProducts } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectProduct = (state) => state.product.product;
export const selectTopratedProducts = (state) => state.product.toprated;
export const selectFeaturedProducts = (state) => state.product.featured;
export const selectListCatProducts = (state) => state.product.products;

export const getStatus = (state) => state.product.status;
export const getError = (state) => state.product.error;

export const getPages = (state) => state.product.pages;
export const getPage = (state) => state.product.page;


export default productSlice.reducer;