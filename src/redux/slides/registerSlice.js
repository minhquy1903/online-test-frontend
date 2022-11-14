import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSuccess: false,
    loading: false
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        register(state, action) {
            state.loading = true;
        },
        registerSuccess(state, action) {
            state.isSuccess = true;
            state.loading = false;
        },
        registerFailed(state, action) {
            state.loading = false;
        }
    }
});

export const selectLoading = (state) => state.register.loading;
export const selectIsSuccess = (state) => state.register.isSuccess;

export const registerActions = registerSlice.actions;

export const registerReducers = registerSlice.reducer;
