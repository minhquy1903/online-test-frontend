import { login } from 'api/authApi';
import { take, fork, call } from 'redux-saga/effects';
import { authActions } from 'redux/slides/authSlide';

function* handleLogin(payload) {
    console.log('handle login', payload);
    // localStorage.setItem('access-token', 'quydeptraivcl');
    const res = yield call(login(payload));
    yield call(authActions.loginSuccess(payload));
}
function* handleLogout() {
    console.log('handle logout');
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
    console.log('auth saga');
    yield fork(watchLoginFlow);
}
