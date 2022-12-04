import { createQuestion, getQuestions } from 'api/questionApi';
import { take, call, put, takeEvery } from 'redux-saga/effects';
import { questionActions } from 'redux/slides/questionSlice';
import History from 'utils/History';
import { getLocalStorage } from 'utils/localStorage';
import notifier from 'utils/notifier';

function* handleCreateQuestion(action) {
    try {
        console.log(action.payload, 'action.payload');
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

function* handleGetQuestions(action) {
    try {
        const res = yield call(getQuestions, action.payload);

        yield put(questionActions.saveQuestions(res));
    } catch (error) {
        console.log(error);
    }
}

export function* questionSagas() {
    yield takeEvery(questionActions.createQuestion.type, handleCreateQuestion);
    yield takeEvery(questionActions.getQuestions.type, handleGetQuestions);
}
