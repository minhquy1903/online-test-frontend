import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    subjectId: '',
    type: 1,
    status: 1,
    questions: []
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        createTest(state, action) {
            state = action.payload;
        }
    }
});

export const testActions = testSlice.actions;

export const testReducers = testSlice.reducer;
