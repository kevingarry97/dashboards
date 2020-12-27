import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import jwtDecode from 'jwt-decode';

const slice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        isLoading: false,
        user: []
    },
    reducers: {
        successLogin: (users, action) => {
            localStorage.setItem("token", action.payload);
            users.user = jwtDecode(localStorage.getItem('token'));
        },
        successRegister: (user, action) => {
            user.isAuthenticated = true;
            user.isLoading = true;
        },
        loginFail: (user, action) => {
            localStorage.removeItem("token");
            user.token = null;
            user.isLoading = false;
            user.isAuthenticated = false;
        },
        logoutSuccess: (user, action) => {
            localStorage.removeItem("token");
            user.token = null;
            user.isLoading = false;
            user.isAuthenticated = false;
        },
        failRegister: (user, action) => {
            localStorage.removeItem("token");
            user.token = null;
            user.isLoading = false;
            user.isAuthenticated = false;
        },
    }
});

export const {
    successLogin,
    successRegister,
    loginFail,
    logoutSuccess,
    failRegister,
} = slice.actions;
export default slice.reducer;

export const registerUser = (user) => apiCallBegan({
    url: '/register',
    method: 'post',
    data: user,
    onSuccess: successRegister.type,
    onError: failRegister.type
});

export const loginUser = (user) =>
  apiCallBegan({
    url: "/login",
    method: "post",
    data: user,
    onSuccess: successLogin.type,
    onError: loginFail.type,
});

export const getUser = state => state.auth.user