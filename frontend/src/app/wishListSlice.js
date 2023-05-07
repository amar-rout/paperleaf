import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
const initialState = {
    wishlistItems: [],
    wishlistCount: 0,
};
const wishlistItems = localStorage.getItem('wishlistItems');
if (wishlistItems) {
    initialState.wishlistItems = JSON.parse(wishlistItems);
    initialState.wishlistCount = initialState.wishlistItems.length;
}
export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        clearWishlistState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        addWishlistItem: (state, action) => {
            state.wishlistItems.push(action.payload);
            state.wishlistCount += 1;
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
            toast.success(`${action.payload.name} saved in wishlist.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
        removeWishlistItem: (state, action) => {
            const removeItem = state.wishlistItems.filter((item) => item.wId !== action.payload);
            state.wishlistItems = removeItem;
            state.wishlistCount = state.wishlistItems.length;
            localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
        },
    },
});

export const { clearWishlistState, addWishlistItem, removeWishlistItem } = WishlistSlice.actions;

export const getWishlistItems = (state) => state.wishlist.wishlistItems;
export const getWishlistCount = (state) => state.wishlist.wishlistCount;

export default WishlistSlice.reducer;