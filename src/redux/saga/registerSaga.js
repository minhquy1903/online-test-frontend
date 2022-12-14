import { register } from 'api/authApi';
import { takeEvery, call, put } from 'redux-saga/effects';
import { registerActions } from 'redux/slides/registerSlice';
import History from 'utils/History';
import notifier from 'utils/notifier';

function* handleRegister(action) {
    try {
        const res = yield call(register, action.payload);

        if (res.errors == null) {
            yield put(registerActions.registerSuccess());
            notifier.success('Register successfully!');
            History.push('/login');
            return;
        }
        notifier.error(res.errors[0].message);
    } catch (error) {
        console.log(error);
    }
}

export function* registerSaga() {
    yield takeEvery(registerActions.register.type, handleRegister);
}
