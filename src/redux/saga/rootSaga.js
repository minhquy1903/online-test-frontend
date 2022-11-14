import * as authSagas from './authSaga';
import * as registerSagas from './registerSaga';

import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([...Object.values(authSagas), ...Object.values(registerSagas)].map(fork));
}
