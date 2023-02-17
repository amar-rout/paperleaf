import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userInfo: {},
    status: 'IDLE',
    errorMessage: ''
};

const USER_LOGIN = 'user/userLogin';

export const loginAsync = createAsyncThunk(
    USER_LOGIN,
    async ({ email, password }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post('/api/users/login', { email, password }, config,);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                console.log("Error Code: " + error.code);
                console.log(error)
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);
// axios.post('/api/users/login', { email, password }, config,)
//     .then(response => {
//         console.log("API call login");
//         localStorage.setItem('userInfo', JSON.stringify(response.data));
//         return thunkAPI.fulfillWithValue(JSON.parse(response.data));
//     }).catch(error => {
//         if (error.response) {
//             // let errorMessage = error.response.data.message;
//             console.log("error.response.data.message");
//             console.log(error.response.data.message);
//             return thunkAPI.rejectWithValue({ error: error.response.data.message });
//         } else if (error.request) {
//             let errorMessage = "Couldn't connect to server. Please try again later.";
//             console.log("error server");
//             console.log(errorMessage);
//             return thunkAPI.rejectWithValue({ error: errorMessage });
//         } else {
//             let errorMessage = "Error" + error.message;
//             console.log("error server message");
//             console.log(errorMessage);
//             return thunkAPI.rejectWithValue({ error: errorMessage });
//         }
//     });
// } catch (error) {
//     return thunkAPI.rejectWithValue({ error: error.message });
// }

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
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.userInfo = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
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

export const selectLoginUser = (state) => state.userInfo;
export const selectStatus = (state) => state.status;
export const selectErrorMessage = (state) => state.user.errorMessage;

export default userSlice.reducer;