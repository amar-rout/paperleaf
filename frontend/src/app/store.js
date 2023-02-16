import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

// loginAsync, logout, registerAsync, selectLoginUserInfo, selectUserErrorMessage, userSlice