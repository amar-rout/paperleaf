import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    wishlistItems: [],
    wishlistCount: 0,
    status: 'IDLE',
    error: ''
};
const wishlistItems = localStorage.getItem('wishlistItems');
const getWishlistQuantity = (state) => {
    let total = 0
    state.wishlistItems.forEach(item => {
        total += item.qty
    })
    return total
}
if (wishlistItems) {
    initialState.wishlistItems = JSON.parse(wishlistItems);
    initialState.wishlistCount = getWishlistQuantity(initialState);
}
export const addWishlistAsync = createAsyncThunk(
    'wishlist/addItemToWishlist',
    async ({ pId, size = 'M' }, thunkAPI) => {
        try {
            const response = await axios.get(`/api/products/${pId}`);
            if (response.data.message || response.data.countInStock <= 0) {
                return thunkAPI.rejectWithValue({ error: response.data.message });
            }
            return thunkAPI.fulfillWithValue({
                wId: response.data._id,
                name: response.data.name,
                category:response.data.category,
                image: response.data.image,
                price: response.data.price,
                size: size,
            });
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);
export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        clearWishlistState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        removeWishlistItem: (state, action) => {
            const removeItem = state.wishlistItems.filter((item) => item.wId !== action.payload);
            state.wishlistItems = removeItem;
            state.wishlistCount = getWishlistQuantity(state);
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addWishlistAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(addWishlistAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                const itemInWishlist = state.wishlistItems.find((item) => item.wId === action.payload.wId);
                if (!itemInWishlist) {
                    state.wishlistItems.push(action.payload);
                    state.wishlistCount += 1;
                }
                localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
            })
            .addCase(addWishlistAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
    },
});

export const { clearWishlistState } = WishlistSlice.actions;

export const getListWishlistItems = (state) => state.wishlist.wishlistItems;
export const getWishlistCount = (state) => state.wishlist.wishlistCount;
export const getWishlistListStatus = (state) => state.wishlist.status;
export const getWishlistListError = (state) => state.wishlist.error;

export default WishlistSlice.reducer;