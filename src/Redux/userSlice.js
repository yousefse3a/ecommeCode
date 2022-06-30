import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, baseUrl } from "./api";
import jwt_decode from "jwt-decode";
import axios from "axios";

const initialState = {
    userToken: null,
    user: null,
    userCart: null,
    loading: null,
    error: false,
}

export const userAuth = createAsyncThunk("users/get", async (user, { rejectWithValue }) => {
    let response = await Login(user);
    const userData = jwt_decode(response.userToken);
    if (response.message === 'logged') {
        localStorage.setItem("userToken", response.userToken);
        let userCart = await axios.get(`${baseUrl}/getCartUser`, {
            headers: {
                authorization: `Bearer ${response.userToken}`
            }
        });
        if (userCart.data.message === "Cart data") {
        } else {
            userCart = await axios.post(`${baseUrl}/Cart`, {}, {
                headers: {
                    authorization: `Bearer ${response.userToken}`
                }
            });
        }
        return { userData, userToken: response.userToken, userCart: userCart.data.Cart };
    } else {
        return rejectWithValue(response);
    }

});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        Logout: (state, action) => {
            localStorage.removeItem("userToken");
            state.userToken = null
            state.user = null
            state.userCart = null

        },
        emptyUserCart: (state, action) => {
            state.userCart = null
        }
    },
    extraReducers: {
        [userAuth.pending]: (state, action) => {
            state.loading = true;
            state.error = null
        },
        [userAuth.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.userData
            state.userToken = action.payload.userToken;
            state.userCart = action.payload.userCart;
            state.error = null

        },
        [userAuth.rejected]: (state, action) => {
            state.loading = false;
            state.error = (action.payload) ? action.payload.message : "pass or email not correct";
            state.user = null;
            state.userToken = null;
            state.userCart = null
        }
    }
})

export const { Logout,emptyUserCart } = userSlice.actions;

export default userSlice.reducer;