import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    logging: false,
    currentUser: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state, action) {
            state.logging = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailed(state, action) {
            state.logging = false;
        },

        logout(state, action) {
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    }
});

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLogging = (state) => state.auth.logging;

export const authActions = authSlice.actions;

export const authReducers = authSlice.reducer;
