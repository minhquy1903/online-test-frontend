import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { authReducers } from './slides/authSlide';
import { registerReducers } from './slides/registerSlide';

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: {
        auth: authReducers,
        register: registerReducers
    },
    middleware
});

sagaMiddleware.run(rootSaga);

export default store;
