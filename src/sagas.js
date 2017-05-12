import { delay } from 'redux-saga';
import { put, takeLatest, all } from 'redux-saga/effects';


function* userLogin() {
  yield delay(1000);
  yield put({ type: 'LOGGED' });
}

function* watchUser() {
  yield takeLatest('USER_LOGIN', userLogin);
}

export default function* rootSaga() {
  yield all([
    watchUser(),
  ]);
}
