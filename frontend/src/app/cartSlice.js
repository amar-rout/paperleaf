import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    cartItems: [],
    cartCount: 0,
    status: 'IDLE',
    error: ''
};
const cartItems = localStorage.getItem('cartItems');
const getCartQuantity = (state) => {
    let total = 0
    state.cartItems.forEach(item => {
        total += item.qty
    })
    return total
}
if (cartItems) {
    initialState.cartItems = JSON.parse(cartItems);
    initialState.cartCount = getCartQuantity(initialState);
}
export const addCartAsync = createAsyncThunk(
    'cart/addItemToCart',
    async ({ pId, size = 'M', qty = 1 }, thunkAPI) => {
        try {
            const response = await axios.get(`/api/products/${pId}`);
            if (response.data.message || response.data.countInStock <= 0) {
                return thunkAPI.rejectWithValue({ error: response.data.message });
            }
            return thunkAPI.fulfillWithValue({
                pId: response.data._id,
                name: response.data.name,
                category:response.data.category,
                image: response.data.image,
                price: response.data.price,
                size: size,
                qty: Number(qty)
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
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCartState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.pId === action.payload);
            item.qty++;
            state.cartCount += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.pId === action.payload);
            if (item.qty === 1) {
                item.qty = 1
            } else {
                item.qty--;
                state.cartCount -= 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeCartItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.pId !== action.payload);
            state.cartItems = removeItem;
            state.cartCount = getCartQuantity(state);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCartAsync.pending, (state) => {
                state.status = 'LOADING';
                state.error = '';
            })
            .addCase(addCartAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                const itemInCart = state.cartItems.find((item) => item.pId === action.payload.pId);
                if (itemInCart) {
                    itemInCart.qty++;
                } else {
                    state.cartItems.push(action.payload);
                }
                state.cartCount += 1;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            })
            .addCase(addCartAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
    },
});

export const { clearCartState, incrementQuantity, decrementQuantity, removeCartItem } = cartSlice.actions;

export const getListCartItems = (state) => state.cart.cartItems;
export const getCartCount = (state) => state.cart.cartCount;
export const getCartListStatus = (state) => state.cart.status;
export const getCartListError = (state) => state.cart.error;

export default cartSlice.reducer;