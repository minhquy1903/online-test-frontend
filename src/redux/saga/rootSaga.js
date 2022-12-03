import * as authSagas from './authSaga';
import * as registerSagas from './registerSaga';
import * as questionSagas from './questionSaga';

import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([...Object.values(authSagas), ...Object.values(registerSagas), ...Object.values(questionSagas)].map(fork));
}
