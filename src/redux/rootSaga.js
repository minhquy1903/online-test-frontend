import authSaga from './saga/authSaga';
import { all } from 'redux-saga/effects';
import registerSaga from './saga/registerSaga';

export default function* rootSaga() {
    yield all([authSaga(), registerSaga()]);
}
