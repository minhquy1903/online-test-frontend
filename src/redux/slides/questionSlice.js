import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        createQuestion(state, action) {
            console.log('action.payload', action.payload);
            state = action.payload;
        }
    }
});

export const questionActions = questionSlice.actions;

export const questionReducers = questionSlice.reducer;
