import { login } from 'api/authApi';
import { take, fork, call, put } from 'redux-saga/effects';
import { authActions } from 'redux/slides/authSlide';
import History from 'utils/History';

function* handleLogin(payload) {
    const res = yield call(login(payload));

    if (res.status == 200) {
        yield put(authActions.loginSuccess(payload));
        localStorage.setItem('access-token', res.accessToken);
        History.push('/');
    }
}
function* handleLogout() {
    localStorage.removeItem('access-token');
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = localStorage.getItem('access-token');
        if (!isLoggedIn) {
            const action = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
