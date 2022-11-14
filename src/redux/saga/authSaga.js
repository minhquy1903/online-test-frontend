import { login } from 'api/authApi';
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { authActions } from 'redux/slides/authSlice';
import History from 'utils/History';
import notifier from 'utils/notifier';

function* handleLogin(action) {
    try {
        console.log(action);
        const res = yield call(login, action.payload);

        if (res.errors == null) {
            notifier.success('Login successfully');
            yield put(authActions.loginSuccess(res.user));
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('access-token', JSON.stringify(res.accessToken));
            History.push('/');
            return;
        }
        notifier.error('Email or password is incorrect!');
    } catch (error) {}
}
function* handleLogout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('user');
    History.push('/login');
}

export function* authLoginSaga() {
    yield takeEvery(authActions.login.type, handleLogin);
}

export function* authLogoutSaga() {
    yield takeEvery(authActions.logout.type, handleLogout);
}
