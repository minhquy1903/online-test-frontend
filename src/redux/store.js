import { createSlice, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        fetchData: (state, action) => {
            return {
                todos: action.payload
            };
        }
    }
});

export const { fetchData } = todoSlice.actions;

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
    middleware
});

sagaMiddleware.run(rootSaga);

export default store;
