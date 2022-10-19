import { register } from 'api/authApi';
import { take, fork, call, put, delay } from 'redux-saga/effects';
import { registerActions } from 'redux/slides/registerSlide';
import History from 'utils/History';

function* handleRegister() {
    try {
        const action = yield take(registerActions.register.type);

        const res = yield call(register, action.payload);
        yield delay(3000);

        if (res.status == 201) {
            yield put(registerActions.registerSuccess());
            History.push('/login');
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* registerSaga() {
    yield fork(handleRegister);
}
