import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from './productSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import wishlistReducer  from './wishlistSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
  },
});