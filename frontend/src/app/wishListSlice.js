import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    wishlistItems: {},
    wishlistCount: 0,
    status: 'IDLE',
    error: ''
};

const wishlistItems = localStorage.getItem('wishlistItems');
if (wishlistItems) {
    initialState.wishlistItems = JSON.parse(wishlistItems);
    initialState.wishlistCount = wishlistItems.length;
}

const ADD_TO_WISHLIST = 'wishlist/addItemTowishlist';
const REMOVE_FROM_WISHLIST = 'wishlist/removeItemFromwishlist';
const UPDATE_WISHLIST = 'wishlist/updatewishlist';


export const addWishlistAsync = createAsyncThunk(
    ADD_TO_WISHLIST,
    async ({ id, qty = 1 }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post(`/api/products/${id}`, config,);
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

export const removeWishlistAsync = createAsyncThunk(
    REMOVE_FROM_WISHLIST,
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

export const updateWishlistAsync = createAsyncThunk(
    UPDATE_WISHLIST,
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


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        clearState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        removewishlistItems: (state) => {
            state.status = 'IDLE';
            state.wishlistItems = [];
            state.error = '';
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add item to wishlist
            .addCase(addWishlistAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(addWishlistAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.wishlistItems = action.payload;
                state.wishlistCount += 1;
                localStorage.setItem('cartItems', JSON.stringify(initialState.wishlistItems));
            })
            .addCase(addWishlistAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
            // Remove item from wishlist
            .addCase(removeWishlistAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(removeWishlistAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.wishlistItems = action.payload;
                state.wishlistCount -= 1;
                localStorage.setItem('cartItems', JSON.stringify(initialState.wishlistItems));
            })
            .addCase(removeWishlistAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
            //  Update wishlist items
            .addCase(updateWishlistAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(updateWishlistAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.wishlistItems = action.payload;
            })
            .addCase(updateWishlistAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })
    },
});

export const { clearState, removeWishlistItems } = wishlistSlice.actions;

export const getListWishlistItems = (state) => state.wishlist.wishlistItems;
export const getWishlistCount = (state) => state.wishlist.wishlistCount;
export const getStatus = (state) => state.wishlist.status;
export const getError = (state) => state.wishlist.error;

export default wishlistSlice.reducer;