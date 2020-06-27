import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_EMPLOYEES } from './actionTypes';

function* fetchEmployees(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* saga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default saga;
