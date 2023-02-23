import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cartItems: {},
    cartCount: 0,
    status: 'IDLE',
    error: ''
};

const cartItems = localStorage.getItem('cartITems');
if (cartItems) {
    initialState.cartItems = JSON.parse(cartItems);
    initialState.cartCount = cartItems.length;
}

const ADD_TO_CART = 'cart/addItemToCart';
const REMOVE_FROM_CART = 'cart/removeItemFromCart';
const UPDATE_CART = 'cart/updateCart';


export const addCartAsync = createAsyncThunk(
    ADD_TO_CART,
    async ({ id, qty = 1 }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post(`/api/products/${id}`, config,);
            if (response.data.message || response.data.countInStock <= 0) {
                return thunkAPI.rejectWithValue({ error: response.data.message });
            }
            return thunkAPI.fulfillWithValue({ payload: { pId: response.data._id, qty: Number(qty) } });
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const removeCartAsync = createAsyncThunk(
    REMOVE_FROM_CART,
    async ({ id, qty = 1 }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post(`/api/products/${id}`, config,);
            if (response.data.message && qty > response.data.countInStock) {
                return thunkAPI.rejectWithValue({ error: response.data.message });
            }
            return thunkAPI.fulfillWithValue({ payload: { pId: response.data._id, qty: Number(qty) } });
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const updateCartAsync = createAsyncThunk(
    UPDATE_CART,
    async ({ id, qty = 1 }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post(`/api/products/${id}`, config,);
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


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCartState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        removeCartItems: (state) => {
            state.status = 'IDLE';
            state.cartItems = [];
            state.error = '';
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add item to cart
            .addCase(addCartAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(addCartAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                let qty = action.payload.qty;
                if (state.cartItems[action.payload.pId])
                    qty = state.cartItems[action.payload.pId] + action.payload.qty;
                state.cartItems = { ...state.cartItems, [action.payload.pId]: qty };
                state.cartCount += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            })
            .addCase(addCartAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
            // Remove item from cart
            .addCase(removeCartAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(removeCartAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                let qty = action.payload.qty;
                if (state.cartItems[action.payload.pId] && state.cartItems[action.payload.pId] > 1 )
                    qty = state.cartItems[action.payload.pId] - action.payload.qty;
                else

                state.cartItems = { ...state.cartItems, [action.payload.pId]: qty };
                state.cartCount += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            })
            .addCase(removeCartAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
            //  Update cart items
            .addCase(updateCartAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(updateCartAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.cartItems = action.payload;
            })
            .addCase(updateCartAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
    },
});

export const { clearCartState, removeCartItems } = cartSlice.actions;

export const getListCartItems = (state) => state.cart.cartItems;
export const getCartCount = (state) => state.cart.cartCount;
export const getStatus = (state) => state.cart.status;
export const getError = (state) => state.cart.error;

export default cartSlice.reducer;