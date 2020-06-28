import { GET_EMPLOYEES, GET_EMPLOYEES_SUCCEEDED, GET_EMPLOYEES_FAILED } from './actionTypes';

export const getEmployees = () => ({
  type: GET_EMPLOYEES,
});

export const getEmployeesSucceeded = (payload) => ({
  type: GET_EMPLOYEES_SUCCEEDED,
  payload,
});

export const getEmployeesFailed = (payload) => ({
  type: GET_EMPLOYEES_FAILED,
  payload,
});
