import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    question: {}
};

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        createQuestion(state, action) {
            state.question = action.payload;
        },
        getQuestions(state, action) {},
        saveQuestions(state, action) {
            state.questions = [...action.payload];
        }
    }
});

export const questionActions = questionSlice.actions;

export const questionReducers = questionSlice.reducer;
