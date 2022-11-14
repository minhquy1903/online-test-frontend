import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correctAnswer: ''
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        saveDraft(state, action) {
            state = action.payload;
        }
    }
});

export const testActions = testSlice.actions;

export const testReducers = testSlice.reducer;
