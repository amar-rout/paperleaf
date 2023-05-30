import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    orders: [],
    order: {},
    status: 'IDLE',
    error: ''
};

export const getOrdersAsync = createAsyncThunk(
    'order/getUserOrders',
    async (token, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(`/api/orders/myorders`, config);
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

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearState: (state) => {
            state.status = 'IDLE';
            return state;
        },
        getOrderByID: (state, action) => {
            const order = state.orders.filter((item) => item._id === action.payload);
            state.order = order;
            // return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrdersAsync.pending, (state) => {
                state.status = 'LOADING';
            })
            .addCase(getOrdersAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.orders = action.payload;
            })
            .addCase(getOrdersAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.error = action.payload.error;
            })
    },
});

export const { clearState, getOrderByID } = orderSlice.actions;

export const getOrders = (state) => state.order.orders;
export const getOrder = (state) => state.order.order;
export const getStatus = (state) => state.order.status;
export const getError = (state) => state.order.error;

export default orderSlice.reducer;