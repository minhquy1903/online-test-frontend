import { saveDraft } from 'api/testApi';
import { takeEvery, call, put } from 'redux-saga/effects';
import { testActions } from 'redux/slides/testSlice';
import History from 'utils/History';
import notifier from 'utils/notifier';

function* handleSaveDraft(action) {
    try {
        const res = yield call(saveDraft, action.payload);

        if (res.errors == null) {
            yield put(testActions.saveDraft());
            notifier.success('Register successfully!');
            History.push('/login');
            return;
        }
        notifier.error(res.errors[0].message);
    } catch (error) {
        console.log(error);
    }
}

export function* saveDraftSaga() {
    yield takeEvery(testActions.saveDraft.type, handleSaveDraft);
}
