import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_EMPLOYEES } from './actionTypes';
import { getEmployeesSucceeded, getEmployeesFailed } from './actions';
import { getEmployees } from '../apis/api';

function* fetchEmployees() {
  try {
    const apiResponse = yield call(getEmployees);
    yield put(getEmployeesSucceeded({ data: apiResponse.data.data }));
  } catch (e) {
    yield put(getEmployeesFailed({ message: e.message }));
  }
}

function* saga() {
  yield takeLatest(GET_EMPLOYEES, fetchEmployees);
}

export default saga;
