import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: '',
    status: 'IDLE',
    errorMessage: ''
};

const loggedUser = localStorage.getItem('user');
if (loggedUser) {
    initialState.user = JSON.parse(loggedUser);
}

const USER_LOGIN = 'user/userLogin';
const USER_REGISTER = 'user/userRegister';
const USER_VERIFY = 'user/userVerify';
const UPDATE_PROFILE = 'user/userProfileUpdate';
const UPDATE_PASSWORD = '/user/userPasswordChange';


export const loginAsync = createAsyncThunk(
    USER_LOGIN,
    async ({ email, password, checked }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post('/api/users/login', { email, password }, config,);
            // if (checked) {
                localStorage.setItem('user', JSON.stringify(response.data));
            // }
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

export const userVerifyAsync = createAsyncThunk(
    USER_VERIFY,
    async (arg, thunkAPI) => {
        try {
            const token = JSON.parse(loggedUser).token;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            };
            const response = await axios.get(`api/users/validateToken`, config);
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                // console.log(error);
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                return thunkAPI.rejectWithValue(error.response.data.message);
            }
        }
    }
);

export const registerAsync = createAsyncThunk(
    USER_REGISTER,
    async ({ fname, mname, lname, name, email, phone, gender, password }, thunkAPI) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json', }, };
            const response = await axios.post('/api/users', { fname, mname, lname, name, email, phone, gender, password }, config,);
            localStorage.setItem('user', JSON.stringify(response.data));
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            if (error.code === "ERROR_BAD_RESPONSE") {
                // console.log("Response : " + error);
                return thunkAPI.rejectWithValue({ error: "Couldn't connect to server at this moment. Please try again after some time." });
            } else {
                // console.log("Request : ");
                // console.log(error);
                return thunkAPI.rejectWithValue({ error: error.response.data.message });
            }
        }
    }
);

export const updateProfileAsync = createAsyncThunk(
    UPDATE_PROFILE,
    async (user, thunkAPI) => {
        try {
            // let token = localStorage.getItem('user').token;
            // const token = (state) => state.user.user.token;
            const token = loggedUser.token;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.patch('/api/users/profile', user, config);
            return thunkAPI.fulfillWithValue(JSON.parse(response.data));
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const updatePasswordChangeAsync = createAsyncThunk(
    UPDATE_PASSWORD,
    async (user, thunkAPI) => {
        try {
            const logUser = JSON.parse(localStorage.getItem('user'));
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${logUser.token}`,
                },
            };
            const response = await axios.put('/api/users/profile/passwordChange', user, config);
            return thunkAPI.fulfillWithValue(JSON.stringify(response.data));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.status = 'IDLE';
            state.user = initialState.user;
            state.errorMessage = '';
            // localStorage.setItem('userInfo', JSON.stringify(state.user));
            localStorage.removeItem("user");
        },
        clearState: (state) => {
            state.status = 'IDLE';
            state.user = JSON.parse(localStorage.getItem('user'));
            return state;
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
                state.user = JSON.parse(action.payload);
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })

            .addCase(registerAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.user = JSON.parse(action.payload);
                state.errorMessage = '';
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.user = JSON.parse("");
                console.log(action.payload);
                state.errorMessage = action.payload.error.message;
            })

            .addCase(userVerifyAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(userVerifyAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.user = JSON.parse(action.payload);
            })
            .addCase(userVerifyAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload;
            })

            .addCase(updateProfileAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                state.status = 'LOADED';
                state.user = JSON.parse(action.payload);
            })
            .addCase(updateProfileAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload.error;
            })

            .addCase(updatePasswordChangeAsync.pending, (state) => {
                state.status = 'LOADING';
                state.errorMessage = '';
            })
            .addCase(updatePasswordChangeAsync.fulfilled, (state, action) => {
                state.status = "LOADED";
                state.user = JSON.parse(action.payload);
                state.errorMessage = 'Password changed successfully';
            })
            .addCase(updatePasswordChangeAsync.rejected, (state, action) => {
                state.status = 'ERROR';
                state.errorMessage = action.payload;
            })
    },
});

export const { logout, clearState } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectErrorMessage = (state) => state.user.errorMessage;

export default userSlice.reducer;




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


// axios.post(registerURL, user)
//     .then(res => {
//         setSuccessMessage("Register Successfully")
//         setErrorMessage("")
//         navigate("/login")
//     })
//     .catch(error => {
//         if (error.response) {
//             setErrorMessage(error.response.data.message)
//             setSuccessMessage("")
//         } else if (error.request) {
//             setSuccessMessage("");
//             setErrorMessage("Couldn't connect to server. Please try again later.");
//         } else {
//             setErrorMessage(error.message)
//             setSuccessMessage("")
//         }
//     })