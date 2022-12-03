import { createQuestion } from 'api/questionApi';
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { questionActions } from 'redux/slides/questionSlice';
import History from 'utils/History';
import notifier from 'utils/notifier';

function* handleCreateQuestion(action) {
    try {
        console.log('action', action.payload);

        const res = yield call(createQuestion, action.payload);

        if (res.errors == null) {
            notifier.success('Question created');
            return;
        }
        notifier.error(res.errors[0].message);
    } catch (error) {
        console.log(error);
    }
}

export function* questionSagas() {
    yield takeEvery(questionActions.createQuestion.type, handleCreateQuestion);
}
