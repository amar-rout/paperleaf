import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userInfo: {},
    status: 'idle',
    errorMessage: ''
};
// const getState = () => {
//     return initialState.userInfo;
// }

export const loginAsync = createAsyncThunk(
    'user/userLogin',
    async (email, password, thunkAPI) => {
        try {
            const serverURL = process.env.REACT_APP_SERVER_URL;
            const config = { headers: { 'Content-Type': 'application/json', }, };
            axios.post(`${serverURL}/api/users/login`, { email, password }, config,)
                .then(response => {
                    localStorage.setItem('userInfo', JSON.stringify(response.data));
                    return thunkAPI.fulfillWithValue(JSON.parse(response.data));
                }).catch(error => {
                    if (error.response) {
                        let errorMessage = error.response.data.message;
                        return thunkAPI.rejectWithValue({ error: errorMessage });
                    } else if (error.request) {
                        let errorMessage = "Couldn't connect to server. Please try again later.";
                        return thunkAPI.rejectWithValue({ error: errorMessage });
                    } else {
                        let errorMessage = "Error" + error.message;
                        return thunkAPI.rejectWithValue({ error: errorMessage });
                    }
                });
        } catch (error) {
            let errorMessage = "Error:" + error.message;
            return thunkAPI.rejectWithValue({ error: errorMessage });
        }
    }
);

// export const registerAsync = createAsyncThunk(
//     'user/userRegister',
//     async (name, email, passowrd, thunkAPI) => {
//         try {
//             const config = { headers: { 'Content-Type': 'application/json', }, };
//             const response = await axios.post('/api/users', { name, email, passowrd }, config,);
//             if (response.data !== "undefined" && response.data !== "") {
//                 localStorage.setItem('userInfo', JSON.stringify(response.data));
//             }
//             return thunkAPI.fulfillWithValue(JSON.parse(response.data));
//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error.message });
//         }
//     }
// );

// export const updateProfileAsync = createAsyncThunk(
//     'user/userProfileUpdate',
//     async (user, thunkAPI) => {
//         try {
//             // const token = localStorage.getItem('userInfo').token;
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${getState().token}`,
//                     // Authorization: `Bearer ${getState().userLogin.userInfo.token}`,'
//                     // Authorization: `Bearer ${token}`,
//                 },
//             };
//             const response = await axios.patch('/api/users/profile', user, config);
//             return thunkAPI.fulfillWithValue(JSON.parse(response.data));
//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error.message });
//         }
//     }
// );

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.userInfo = '';
            state.errorMessage = '';
            localStorage.setItem('userInfo', JSON.stringify(state.user));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
                state.errorMessage = '';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userInfo = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'error';
                state.errorMessage = action.error.message;
            })
        // .addCase(registerAsync.pending, (state) => {
        //     state.status = 'loading';
        //     state.errorMessage = '';
        // })
        // .addCase(registerAsync.fulfilled, (state, action) => {
        //     state.status = 'idle';
        //     state.userInfo = action.payload;
        // })
        // .addCase(registerAsync.rejected, (state, action) => {
        //     state.status = 'error';
        //     state.errorMessage = action.error.message;
        // })
    },
});

export const { logout } = userSlice.actions;

export const selectLoginUser = (state) => state.user.userInfo;

export const selectErrorMessage = (state) => state.user.errorMessage;

export default userSlice.reducer;